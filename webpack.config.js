module.exports = {
  entry: ['webpack/hot/dev-server','./js/main.js','./css/main.css'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }

    ]
  }
};