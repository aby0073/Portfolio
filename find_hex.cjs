const fs = require('fs');
const path = require('path');

function getHexCodes(dir, codes = new Set()) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      getHexCodes(full, codes);
    } else if (file.endsWith('.css') || file.endsWith('.jsx')) {
      const text = fs.readFileSync(full, 'utf8');
      const matches = text.match(/#[0-9a-fA-F]{3,6}/g);
      if (matches) matches.forEach(m => codes.add(m.toLowerCase()));
    }
  }
  return codes;
}
const codes = Array.from(getHexCodes(path.join(__dirname, 'src'))).sort();
fs.writeFileSync('hex_out.txt', JSON.stringify(codes, null, 2), 'utf8');
console.log("Written to hex_out.txt");
