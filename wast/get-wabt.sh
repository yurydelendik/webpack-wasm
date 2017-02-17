#/bin/bash
mkdir -p wabt
curl https://raw.githubusercontent.com/WebAssembly/wabt/master/demo/libwabt.js -o wabt/libwabt.js
node -e "var fs=require('fs'),f='wabt/libwabt.js';fs.writeFileSync(f,fs.readFileSync(f).toString().replace(/var Module=\{\};/, 'var Module={get wabt(){return wabt;}};Module.locateFile=function(f){return require(\"path\").join(__dirname,f);};'));"
curl https://raw.githubusercontent.com/WebAssembly/wabt/master/demo/libwabt.js.mem -o wabt/libwabt.js.mem
curl https://raw.githubusercontent.com/WebAssembly/wabt/master/LICENSE -o wabt/LICENSE
