const fs = require('fs');
const md5File = require('md5-file');
const path = require('path');
const register = require('ignore-styles').default;

const mimeTypes = {
  '.jpg': 'image/jpeg',
  '.png': 'image/png'
};

register(undefined, (mod, filename) => {
  const ext = ['.png', '.jpg', '.svg'].find(f => filename.endsWith(f));
  if (!ext) return;

  if (ext !== '.svg' && fs.statSync(filename).size < 10000) {
    const file = fs.readFileSync(filename).toString('base64');
    const mimeType = mimeTypes[ext] || 'image/jpg';
    mod.exports = `data:${mimeType};base64,${file}`;
  } else {
    const hash = md5File.sync(filename).slice(0, 8);
    const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);
    mod.exports = `/static/media/${bn}`;
  }
});

require('./server');
