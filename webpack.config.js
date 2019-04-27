const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackDash = require('webpack-dashboard/plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

const paths = {
  source: path.resolve(__dirname, './app'),
  build: path.resolve(__dirname, './public'),
};

const config = {
  entry: `${APP_DIR}/main.jsx`,
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/',
  },
  plugins: [
    new WebpackDash(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.build, 'template.html'),
      filename: path.join(paths.build, 'index.html'),
    }),
  ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, 'app'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
