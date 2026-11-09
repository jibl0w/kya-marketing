// Run from C:\Codes\kya-marketing :  node patch-website-step05.js
// Changes the "How It Works" step 05 text on kya.ng to reflect supplier inspection. Title is unchanged.
const fs = require("fs");
const file = "app/page.tsx";
if (!fs.existsSync(file)) { console.log("Run this from C:\\Codes\\kya-marketing"); process.exit(1); }
const src = fs.readFileSync(file, "utf8");
const re = /(step:\s*"05",\s*title:\s*"Manufacture, Inspection & Shipment",\s*text:\s*")([^"]*)(")/;
const m = src.match(re);
if (!m) { console.log("Step 05 text not found as expected. No change made."); process.exit(1); }
const text = "Goods are produced. Once you have paid the balance and freight, the supplier inspects the goods and shares the inspection report and photos with you on the platform. Goods ship once the report is approved, and the supplier provides the post-shipment documents.";
fs.copyFileSync(file, file + ".backup");
fs.writeFileSync(file, src.replace(re, (_, a, _b, c) => a + text + c));
console.log("Done. Old text was: " + m[2]);
console.log("Backup saved as " + file + ".backup");
