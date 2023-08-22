// Execute: node 1-stdin.js
// Output: Welcome to Holberton School, what is your name?
//         Your name is: <input>
//         This important software is now closing
//         (program exits)
// Note: <input> is whatever the user inputs
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
});

rl.on('close', () => {
    console.log('This important software is now closing');
    process.exit(0);
});

module.exports = rl;
