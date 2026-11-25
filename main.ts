import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Apology — a two-line robot confession.
// Line 1 owns one specific mistake; line 2 names the lesson and the fix.
const text = [
  "I am sorry I watered your laptop instead of the fern, because my sensors saw a dark rectangle and assumed it was thirsty.",
  "I have learned to check for leaves before I pour anything, so from now on I will only water things that photosynthesize.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(text);
