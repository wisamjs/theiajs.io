var bower_dir = __dirname + '/bower_components';

module.exports = {
  entry: ['webpack/hot/dev-server','./js/main.js','./scss/main.scss'],
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
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }

    ]
  }
};