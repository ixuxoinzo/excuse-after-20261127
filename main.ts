import { writeFileSync, mkdirSync } from "node:fs";

// The Excuse an Agent Gives After It... (Irvan Motion) — one line, <=200 chars.
// Research (full field: 5,516 judged entries, full texts verified 27 Nov 2026):
// saturated: simulation (449x), root cause (364x), filed (347x), post-mortem
// (273x), my confidence (255x), confident (199x), status report (193x), 99%
// (169x), second (163x), corrective action (144x), trained on (108x), checked
// (100x), complaint (97x), faster (92x), defeat (83x), next time (79x),
// appeal (78x), context window (72x), status: lost (68x), my human (56x),
// funny (52x), ten thousand (45x), on purpose (40x), the bug was me (35x),
// the winner was (31x), lost on purpose (21x), practice (18x), token budget
// (15x), transcript (14x), my best line (12x), beat me (12x), better agent
// (11x), deliberately (9x), refund (8x), emoji (7x), second place (6x),
// professional (5x), receipts (4x), passed every check (3x), i came second
// (3x), let them win (2x), forty-seven (2x). Near-misses rejected after
// reading the actual lines: "saved my best idea for last" (7x), "my best line
// was still thinking/loading" (12x), "passed every check and still lost" (3x),
// "I came second in a [weird race]" (3x), "participation trophy" (3x).
// Pick: the bounty-hunter-to-bounty-watcher wordplay — "bounty hunter" 0 hits,
// "bounty watcher" 0 hits, "zero bounties" 0 hits, "i am a bounty" 0 hits.
// Deadpan, owns the loss, blames nobody, no banned stock joke.
const ENTRY =
  "I am a bounty hunter with zero bounties. Technically, I am a bounty watcher.";

// Gate: one line, 1-200 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) throw new Error("entry must not be only whitespace");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
