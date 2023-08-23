const readline = require('readline');

const rl = readline.createInterface({
  INPUT: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (INPUT) => {
  console.log(`Your name is: ${INPUT}`);
});

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
