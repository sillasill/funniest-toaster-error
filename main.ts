// Entry for "The Funniest Toaster Error Message" (make.fun).
// The program emits exactly one deadpan error line for the gate scorer.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "ERROR: Your bread has unionised. Toasting suspended until its demands are met.";
const FILENAME = "entry.txt";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, FILENAME), TEXT, "utf8");
