var loaderUtils = require("loader-utils");

module.exports = function (source) {
  this.cacheable();

  var data = JSON.stringify(source.toJSON().data);

  var query = loaderUtils.parseQuery(this.query || this.resourceQuery);
  var imports = [];
  if (query.imports) {
    query.imports.split(',').forEach(function (i) {
      imports.push(i.indexOf(':') < 0 ? {name: i, path: i} :
        {name: i.substring(0, i.indexOf(':')), path: i.substring(i.indexOf(':') + 1)});
    });
  }
  var importsCode = "{" + imports.map(function (i) {
    return JSON.stringify(i.name) + ": require(" + JSON.stringify(i.path) + ")";
  }).join(',') + "}";

  return "var data = new Uint8Array(" + data + ");" +
         "module.exports = new WebAssembly.Instance(" +
         "new WebAssembly.Module(data), " + importsCode +
         ").exports;";
};

module.exports.raw = true;
