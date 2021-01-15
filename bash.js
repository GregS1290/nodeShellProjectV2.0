const pwd = require('./pwd.js');
const ls = require('./ls.js');

process.stdout.write('prompt > ');

// if (pwd()) {
//   pwd();
// } else if (ls()) {
//   ls();
// }

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'ls') {
    ls();
  } else if (cmd === 'pwd') {
    pwd();
  } else {
    throw 'Try again!';
  }
});
