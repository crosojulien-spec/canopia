# Proposed reconstruction plan

This plan preserves the sequence proposed before construction began. Development was authorised on 5 October 2026; see `README.md` and `Verification report.md` for the actual state. Reversible technical choices are React/TypeScript, Express and local PostgreSQL through PGlite. This planning document does not itself select a paid model or hosting service; subsequent approvals are recorded in the product decisions.

## 1. Verify and complete the source package

- Confirm the local folder, tools and access actually available in the Codex session.
- Obtain a screened copy of the old application's code if available. The earlier inspection covered Replit's Admin-Console project at commit 39caeb7, dated 1 October 2026; its exact correspondence to the public deployment was not proven.
- Preserve the existing application as a reference. Review reusable parts and explain the chosen approach to Julien. Do not assume every line must be rewritten to create an independent application.
- Read the supplied prompt, Sukhothai profile and at least one matching conversation/brief set. Also read the Seven Secrets material.
- Examine existing services without exposing secrets. Propose a technical choice and estimate if new spending would be required.

Outcome: available sources, confirmed access and identified blockers.

## 2. Prepare the six DNA profiles

- Preserve the historical Sukhothai and Seven Secrets profiles; identify dated or unconfirmed material before using it.
- Prepare Kings Court, Golden Well, Pavillon de la Reine and Hôtel Amour Nice from attributed public sources.
- Cover identity, capabilities, adaptation possibilities, existing services, limits, roles and known working practices. Keep rich text rather than a closed catalogue.
- Separate published information, historical observations, proposed interpretations and points to confirm.
- Have Julien review profiles before presenting them as operator reference profiles. Do not invent a role, service, budget or permission to fill a gap.

Outcome: six profiles usable for a demonstration, with visible limitations.

## 3. Build the operator and guest foundation

- One protected console for hotels, stays and reservation information.
- DNA viewing and editing with documentary references.
- Explicit stay/hotel association and guest-link creation.
- Operator-triggered email invitation, visible result, error handling and duplicate-send prevention.
- English guest experience: existing context, hotel-informed dialogue and conversation persistence.
- Guest links that are difficult to guess and limited to the relevant stay. Real-use expiry and retention rules require agreement; the local prototype currently uses a seven-day link default.

Outcome: a stay can be created, invited and taken through a saved conversation. Real email delivery remains subject to its separate access and sending approval.

## 4. Generate and review the brief

- Revise historical instructions, explaining changes that affect the product.
- On normal completion, generate an English brief with the correct DNA and complete conversation, or a representation whose fidelity has been verified.
- Show conversation completion separately from the actual brief-generation state, so "finished" is not confused with "brief ready."
- Propose adaptations consistent with capabilities. Give the concierge research tasks when an external option needs to be found.
- Route to reception when the absence of a concierge is known; require an operator routing choice when the role is unknown.
- Allow review, editing, copying and text export. Each regeneration creates a separate version; export uses the saved selection, as subsequently approved by Julien.
- Keep Gamma, final layout and hotel delivery outside automation in this version.

Outcome: an end-to-end journey from stay creation to a human-reviewed exported brief.

## 5. Verify and prepare the demonstration

- Compare representative historical cases: rich context, minimal replies, business travel, withdrawal and explicit dietary constraints.
- Verify adaptation across hotels, including a known concierge and an explicitly configured reception-only test case.
- Run real AI generation with a fictional case once access is approved; keep simulated checks separate.
- Test email only with an address designated by Julien, never historical recipients.
- Prepare a stable demonstration with an existing conversation and brief as a fallback for network unavailability.
- Provide launch instructions, known limits, repository structure and the work reserved for the event team.

Outcome: a reusable foundation and verified demonstration, with claims proportional to the checks performed.

## 6. Hackathon integration contract

Prepare a documented exchange between the core product and future agent: declared interests, stay context, identity and links authorised for testing, DNA version, sourced findings, proposals and human selection. Do not implement the research component during preparatory reconstruction.

The component's exact position remains open. Its output should be able to enrich a brief without automatically rewriting an explicitly stated guest preference.
