var bower_dir = __dirname + '/bower_components';
var exclude=/node_modules/;

module.exports = {
  entry: ['webpack/hot/dev-server','./www/app.js', './www/scss/app.scss', './www/components/Terminal/_Terminal.scss' , './www/components/Title/_Title.scss'],
  resolve: {
    alias: {
      'react': bower_dir + '/react/react.js'
    }
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
            {test: /(\.js$|\.jsx$)/ , exclude: [/node_modules/,bower_dir] ,loader: "eslint-loader"}
    ],

    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.js$/, loader: 'babel-loader', exclude: exclude},

    ]
  },
  eslint: {
    configFile: '.eslintrc'
  }
};