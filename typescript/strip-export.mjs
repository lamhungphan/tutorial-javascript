import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = join(dirname(fileURLToPath(import.meta.url)), "dist");
const re = /^\s*export\s*\{\}\s*;?\s*$/;

let stripped = 0;
for (const file of readdirSync(distDir)) {
    if (!file.endsWith(".js")) continue;
    const path = join(distDir, file);
    const lines = readFileSync(path, "utf8").split("\n");
    const kept = lines.filter((line) => !re.test(line));
    if (kept.length !== lines.length) {
        writeFileSync(path, kept.join("\n"), "utf8");
        stripped++;
    }
}
console.log(`stripped bare "export {};" from ${stripped} file(s) in dist/`);