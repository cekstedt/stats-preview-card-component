"use strict";

const readFile = require("fs").promises.readFile;
const parse = require("node-html-parser").parse;

const index = _readFile("src/index.html");
const pixelGlass = _readFile("tools/pixel-glass.html");

Promise.all([index, pixelGlass]).then(([i, p]) => {
  console.log(p);
});

console.log(pixelGlass);

function _readFile(path) {
  readFile(path)
    .then(fileBuffer => {
      // console.log(fileBuffer.toString());
      return fileBuffer.toString();
    })
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
}
