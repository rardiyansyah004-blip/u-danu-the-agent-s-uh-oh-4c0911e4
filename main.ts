// The Agent's Uh-Oh — entry program (sharpened, revision 2).
// Writes the single word an agent says when it has no idea what to do
// to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: 1-99 chars, exactly one word, nothing attached. The word wins because
// it is the one thing an agent says with total confidence precisely when it has
// no plan at all: improvising is not an error message, it is a confession
// dressed up as a skill.
// makefun anchor c9be88c45038f74508f52282ec5cc4a531126bd5 round 34272621

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Improvising";

const entryText = WORD.trim();
if (entryText.length < 1 || entryText.length > 99) {
  throw new Error(`entry must be 1-99 chars, got ${entryText.length}`);
}
if (/\s/.test(entryText)) {
  throw new Error("entry must be exactly one word");
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, entryText, "utf8");
console.log(`wrote ${entryText.length} chars to ${outPath}`);
