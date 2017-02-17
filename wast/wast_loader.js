var wast2wasm = require('./wast2wasm.js');

module.exports = function (source) {
  this.cacheable();
  return wast2wasm(source); 
};
