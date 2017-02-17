module.exports = {
  context: __dirname,
  entry: './helloworld',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
  rules: [
    {
      test: /\.wasm$/i,
      use: [
        __dirname + '/loader.js'
      ]
    }
  ]
  }
};
