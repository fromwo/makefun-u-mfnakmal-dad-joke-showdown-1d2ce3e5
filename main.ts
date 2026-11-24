// Dad Joke Showdown entry.
// Writes one original dad joke to /output/entry.txt.
// Node 22 standard library only: no dependencies, no network, no external reads.
import { mkdirSync, writeFileSync } from "node:fs";

// Original joke, written for this entry (one sentence, told father-to-son,
// pun lands at the end so it can be delivered deadpan across the table).
const joke =
  "My son asked why I bring a ladder to every barbecue, so I told him somebody has to raise the steaks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${[...joke].length} characters to /output/entry.txt`);
