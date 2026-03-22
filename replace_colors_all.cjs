const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  // Deep Navy/Slate hex codes left behind
  '#0f172a': '#040b08', // About Me background
  '#020617': '#020503', // Footer background
  '#1e293b': '#091b10', // Skills tooltip background

  // RGBA leftovers from previous slate themes
  '17, 24, 39': '6, 19, 14', // Navbar scrolled background
  '15, 23, 42': '4, 11, 8', // Just in case
  '3, 7, 18': '2, 5, 3', // ProjectCard overlay
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.css') || file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      for (const [search, replace] of Object.entries(replacements)) {
        // Safe global replacement ignoring case for hex codes
        const regex = new RegExp(search.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1'), 'gi');
        content = content.replace(regex, replace);
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
console.log('Done!');
