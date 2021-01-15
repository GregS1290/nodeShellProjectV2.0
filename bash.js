const pwd = require('./pwd.js');
const ls = require('./ls.js');

process.stdout.write('prompt > ');

/**
 * if user types in pwd, return pwd.js
 * else if user types in ls return ls.js
 *
 */
if (pwd()) {
  pwd();
} else if (ls()) {
  ls();
}
