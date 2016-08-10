"use strict";

const filename = 'text.txt',
  fs = require('fs'),
  getContents = function printContent(file) {
    try{
      return file.toString();
    } catch(TypeError) {
      return file;
    }
  }

console.log("ReadFile ....");
console.log("=".repeat(76));

let file;
fs.readFile(`${__dirname}/${filename}`, function (err, contents) {
  file = contents;
  console.log( `Uh, actually, now I'm done. Contents are: ${ getContents(file) }`);
});

console.log(`Done reading file. Contents are: ${getContents(file)}`);
console.log("=".repeat(76));
