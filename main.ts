// Green Tests, Nothing Works: The Excuse Contest — make.fun entry
// Writes the funniest one-line excuse for green tests while nothing works to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "All tests pass because none of them run the code — they just check the comments and call it a day.";

// writeEntry() writes the entry line to /output/entry.txt as UTF-8 text.
function writeEntry(): void {
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, entry, "utf8");
  console.log(`Wrote ${entry.length} chars to ${outPath}`);
}

writeEntry();
