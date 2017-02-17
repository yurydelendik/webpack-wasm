var w = require('./helloworld.wasm?imports=sys:./sys.js');
require('./sys.js').setMemory(w.memory.buffer);
w.main();
