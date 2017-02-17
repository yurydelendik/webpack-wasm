var memory;

exports.setMemory = function (m) {
  memory = new Uint8Array(m);
};

exports.print = function(ptr) {
  var p = ptr;
  while (memory[p]) p++;
  var s = String.fromCharCode.apply(null, memory.subarray(ptr, p));
  console.log(s);
};
