const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public'}]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node-modules)/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      }
    ]
  }
}
