// Fixes marketing-site wording. Run inside C:\Codes\kya-marketing:  node fix-marketing-wording.js
// All-or-nothing: if any expected text is not found exactly once, nothing is changed.
const fs = require("fs");

const edits = [
  { file: "app/page.tsx",
    from: '{ value: "CBN", label: "Aligned", sub: "Regulatory compliance built in" },',
    to:   '{ value: "CAC", label: "Registered", sub: "Registered in Nigeria, RC 9136827" },' },
  { file: "app/page.tsx",
    from: '"Regulatory-compliant import process",',
    to:   '"Guidance on import documentation requirements",' },
  { file: "app/page.tsx",
    from: '>Lagos, Nigeria<',
    to:   '>Ibadan, Nigeria<' },
  { file: "app/layout.tsx",
    from: '"Nigeria trade", "Asia trade", "import infrastructure", "trade finance", "Nigeria Asia corridor"',
    to:   '"Nigeria Asia trade", "import sourcing Nigeria", "verified Asian suppliers", "cross-border sourcing", "trade documentation"' },
  { file: "app/api/contact/route.ts",
    from: '${esc(inbox)} · kya.ng',
    to:   'info@kya.com.ng · kya.ng' },
];

const texts = {};
for (const e of edits) {
  if (!(e.file in texts)) {
    if (!fs.existsSync(e.file)) { console.error("File not found: " + e.file); process.exit(1); }
    texts[e.file] = fs.readFileSync(e.file, "utf8");
  }
}
for (const e of edits) {
  const n = texts[e.file].split(e.from).length - 1;
  if (n !== 1) { console.error("Expected exactly 1 match in " + e.file + " but found " + n + " for: " + e.from + "\nNothing was changed."); process.exit(1); }
}
for (const e of edits) texts[e.file] = texts[e.file].replace(e.from, () => e.to);
for (const f of Object.keys(texts)) { fs.writeFileSync(f, texts[f]); console.log("Patched " + f); }
console.log("Done. Now run: npx tsc --noEmit");
