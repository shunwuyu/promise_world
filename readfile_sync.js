"use strict";

const filename = 'text.txt',
  fs = require('fs');

console.log('Reading file....');

const file = fs.readFileSync(`${__dirname}/${filename}`);
console.log('Done reading file.');
console.log(`Content:${file.toString()}`);
