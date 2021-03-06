const original = process.cwd();

process.chdir(process.env.PWD || original);
const dir = require('app-root-dir').get();
process.chdir(dir);

module.exports = {
  toString: () => dir,
  original: () => original
};
