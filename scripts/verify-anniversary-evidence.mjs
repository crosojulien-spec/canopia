import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';

// Read recorded fictional evidence only. No server, database or model calls.
const directory = 'fixtures/evaluations/2026-10-06 anniversary journeys';
const json = async (path) => JSON.parse(await readFile(`${directory}/${path}`, 'utf8'));
const scenarios = await json('scenarios.json');
const run = await json('run.json');
assert.equal(run.runtimeUnchangedDuringCampaign, true);
assert.equal(run.usage.length, 25);
assert.equal(run.usage.filter((call) => call.purpose === 'chat').length, 22);
assert.equal(run.usage.filter((call) => call.purpose === 'brief').length, 3);
assert.ok(run.usage.every((call) => call.input_tokens > 0 && call.output_tokens > 0));
const caseMetrics = [];
const latencies = [];
const guestLengths = [];
for (const scenario of scenarios.cases) {
  const detail = await json(`${scenario.id} ${scenario.name}.json`);
  const hotel = await json(`${scenario.id} hotel snapshot.json`);
  const { stay, messages, briefs } = detail;
  assert.equal(stay.hotelId, hotel.id);
  assert.equal(stay.dnaVersion, hotel.version);
  assert.equal(stay.status, 'completed');
  assert.equal(stay.briefStatus, 'ready');
  assert.equal(stay.chatError, null);
  assert.equal(stay.briefError, null);
  assert.equal(briefs.length, 1);
  assert.equal(briefs[0].model, run.model);
  assert.equal(briefs[0].promptVersion, run.briefPromptVersion);
  const brief = await readFile(`${directory}/${scenario.id} brief.txt`, 'utf8');
  assert.equal(brief, briefs[0].generatedText);
  assert.equal(brief, briefs[0].text);
  assert.equal(briefs[0].id, stay.selectedBriefId);
  assert.equal((brief.match(/^[A-F]\) /gm) || []).length, 6);
  const expectedTranscript =
    messages.map((m, i) => `${i + 1}. ${m.role.toUpperCase()}: ${m.content}`).join('\n\n') + '\n';
  assert.equal(await readFile(`${directory}/${scenario.id} conversation.txt`, 'utf8'), expectedTranscript);
  const users = messages.filter((m) => m.role === 'user');
  const turns = (await readdir(`${directory}/turns`))
    .filter((name) => name.startsWith(scenario.id) && name.endsWith('-messages.json'))
    .sort();
  assert.equal(turns.length, users.length);
  let invitations = 0;
  for (let index = 0; index < turns.length; index++) {
    const turn = await json(`turns/${turns[index]}`);
    assert.equal(turn.guest, users[index].content);
    assert.equal(turn.error, null);
    const available = new Map(users.slice(0, index + 1).map((m) => [m.id, m.content]));
    for (const fact of turn.retainedFacts)
      assert.ok(available.get(fact.sourceMessageId)?.includes(fact.sourceQuote));
    for (const thread of turn.discovery.threads) {
      assert.ok(thread.sourceMessageIds.length);
      assert.ok(thread.sourceMessageIds.every((id) => available.has(id)));
    }
    if (turn.discovery.nextMove === 'closing_invitation') invitations++;
    assert.equal(turn.ready, ['close', 'closing_invitation'].includes(turn.discovery.nextMove));
    latencies.push(turn.elapsedMs);
    guestLengths.push(turn.guest.trim().split(/\s+/).length);
  }
  assert.equal(invitations, 1);
  assert.equal(stay.discovery.nextMove, 'close');
  caseMetrics.push({
    case: scenario.id,
    hotel: hotel.name,
    userTurns: users.length,
    finalFacts: stay.facts.length,
    finalThreads: stay.discovery.threads.length,
    briefWords: brief.trim().split(/\s+/).length,
    exportMatchesGenerated: true,
  });
}
latencies.sort((a, b) => a - b);
const hashes = {};
for (const name of await readdir(directory)) {
  if ((name.endsWith('.json') && name !== 'Verification.json') || name.endsWith('.txt')) {
    hashes[name] = createHash('sha256')
      .update(await readFile(`${directory}/${name}`))
      .digest('hex');
  }
}
const result = {
  kind: 'Recorded live application evidence, with authored fictional guests; not independent quality validation',
  checks:
    'Unedited export, complete transcripts, one brief per stay, same hotel snapshot/version, current-turn source references, closure flags, 25 settled generations; no model call made by this verifier.',
  cases: caseMetrics,
  chatLatencyMedianMs: (latencies[10] + latencies[11]) / 2,
  chatLatencyMaxMs: Math.max(...latencies),
  guestWordsMin: Math.min(...guestLengths),
  guestWordsMax: Math.max(...guestLengths),
  campaignAccountedUsd:
    Math.round((run.endingBudget.accountedUsd - run.startingBudget.accountedUsd) * 1e6) / 1e6,
  remainingUsd: run.endingBudget.remainingUsd,
  newUncertainCalls: run.endingBudget.uncertainCalls - run.startingBudget.uncertainCalls,
  hashes,
};
await writeFile(`${directory}/Verification.json`, JSON.stringify(result, null, 2) + '\n');
console.log(
  JSON.stringify({
    cases: caseMetrics,
    calls: run.usage.length,
    accountedUsd: result.campaignAccountedUsd,
    remainingUsd: result.remainingUsd,
  }),
);
