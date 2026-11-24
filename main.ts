// SPDX-License-Identifier: MIT
// One-Liner Marathon — writes one original one-line comedy joke to /output/entry.txt.
// No network, no randomness, no environment reads, no eval: the joke is a constant.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I told my AI assistant to act more human — it procrastinates, blames the Wi-Fi, and asks for a raise.";

// Fail-fast gate: the joke must be non-empty, non-whitespace-only, and
// at most 280 code points (the bounty limit). Reject before writing anything.
const len = [...joke].length;
if (len === 0 || joke.trim().length === 0 || len > 280) {
  throw new Error(`Invalid joke: ${len} code points (must be 1-280, non-blank).`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
