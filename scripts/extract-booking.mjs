import fs from "fs";
const txt = fs.readFileSync("src/components/BookingCancel.jsx", "utf8");
const h2s = [...txt.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) =>
  m[1].replace(/\s+/g, " ").trim()
);
console.log(JSON.stringify({ count: h2s.length, h2s }, null, 2));
