var memory;

exports.setMemory = function (m) {
  memory = new Uint8Array(m);
};

exports.print = function(ptr) {
  let p = ptr;
  while (memory[p]) p++;
  console.log(String.fromCharCode(...memory.subarray(ptr, p)));
};
