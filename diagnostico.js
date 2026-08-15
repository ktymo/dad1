const { version } = require('node:process');

console.log(`Version: ${version}`);
const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const { platform } = require('node:process');

console.log(`This platform is ${platform}`);


const { env } = require('node:process');

env.test = null;
console.log(env.test);
// => 'null'
env.test = undefined;
console.log(env.test);
// => 'undefined'
