module.exports = {
  context: __dirname,
  entry: './main',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
  rules: [
    {
      test: /\.wast$/i,
      use: [
        __dirname + '/../helloworld/loader.js',
        __dirname + '/wast_loader.js',
      ]
    }
  ]
  }
};
