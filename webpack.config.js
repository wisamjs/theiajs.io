var bower_dir = __dirname + '/bower_components';

module.exports = {
  entry: ['webpack/hot/dev-server','./www/app.js', './www/scss/app.scss', './www/components/Terminal/_Terminal.scss' , './www/components/Title/_Title.scss'],
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
      { test: /\.js$/, loader: 'babel-loader'},
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
};