import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "We held a meeting to read an email out loud, and the email was an invitation to the next meeting.";

// The gate requires one line of 1-200 characters; refuse to write anything else.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error("Entry must be a single line of 1-200 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
