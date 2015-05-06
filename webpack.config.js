var bower_dir = __dirname + '/bower_components';

module.exports = {
  entry: ['webpack/hot/dev-server','./js/main.js','./css/main.css'],
  resolve: {
    alias: {
      'react': bower_dir + '/react/react.min.js'
    }
  },
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