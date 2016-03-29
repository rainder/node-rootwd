const original = process.cwd();

process.chdir(__dirname);
const dir = require('app-root-dir').get();
process.chdir(dir);

module.exports = {
  toString: () => dir,
  original: () => original
};