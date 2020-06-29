const path = require('path');

module.exports = {
  entry: './frontend/pheedly.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: './bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      // {
      //   test: [/\.png$/],
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {},
      //   },
      // }
    ]
  },
  resolve: {
    extensions: [".js", '.jsx', '*']
  }
};