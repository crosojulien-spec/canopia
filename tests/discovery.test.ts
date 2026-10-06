import { test } from 'node:test';
import assert from 'node:assert/strict';
import { discoveryReady, groundedDiscovery } from '../server/discovery.ts';
import type { DiscoveryState, Message } from '../shared/types.ts';

test('a late substantive clarification removes readiness; uncertainty is not a compulsory question', () => {
  const state: DiscoveryState = { threads: [], nextMove: 'closing_invitation', focus: '' };
  assert.equal(discoveryReady(state), true);
  assert.equal(discoveryReady({ ...state, nextMove: 'clarify' }), false);
  assert.equal(discoveryReady({ ...state, nextMove: 'withdraw' }), false);
  assert.equal(
    discoveryReady({
      ...state,
      nextMove: 'close',
      threads: [
        {
          person: 'Companion',
          topic: 'Pillows',
          status: 'unknown',
          detail: 'Speaker does not know.',
          sourceMessageIds: ['u1'],
        },
      ],
    }),
    true,
  );
});

test('working topics cannot cite host suggestions, another stay or a mixture of valid and invalid evidence', () => {
  const messages: Message[] = [
    { id: 'u1', role: 'user', content: 'No flowers, please.', createdAt: '' },
    { id: 'a1', role: 'assistant', content: 'Would a note be welcome?', createdAt: '' },
  ];
  const base = { person: 'Guest', topic: 'Flowers', status: 'declined' as const, detail: 'No flowers.' };
  const state: DiscoveryState = {
    threads: [
      { ...base, sourceMessageIds: ['u1'] },
      { ...base, sourceMessageIds: ['a1'] },
      { ...base, sourceMessageIds: ['other-stay'] },
      { ...base, sourceMessageIds: ['u1', 'other-stay'] },
      { ...base, sourceMessageIds: [] },
    ],
    nextMove: 'bridge',
    focus: 'Exploring the city',
  };
  assert.deepEqual(groundedDiscovery(state, messages).threads, [state.threads[0]]);
  assert.equal(state.threads.length, 5);
});
