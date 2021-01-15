module.exports = function () {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    //stdout --> the file path
    if (cmd === 'pwd') {
      process.stdout.write(`Current directory: ${process.cwd(cmd)}`);
      process.stdout.write('\nprompt > ');
    }
  });
};
