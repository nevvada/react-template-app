const path = require('path');
const webpack = require('webpack');

const environment = process.env.NODE_ENV || 'development';
module.exports = {
  mode: environment,
  entry: path.join(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 8080,
    publicPath: '/build',
    hot: true,
    historyApiFallback: true
  }
};
