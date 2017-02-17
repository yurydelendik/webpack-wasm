var wabt = require('./wabt/libwabt.js').wabt;

module.exports = function(text) {
  var stackAllocator = new wabt.StackAllocator(wabt.LibcAllocator);
  var script = wabt.parseAst(stackAllocator.allocator, 'test.wast', text);
  script.resolveNames();
  script.validate();
  var binaryOutput = script.toBinary();
  return Buffer.from(binaryOutput.buffer);
};
