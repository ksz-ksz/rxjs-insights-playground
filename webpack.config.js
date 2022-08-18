const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { RxjsInsightsPlugin } = require('@rxjs-insights/plugin-webpack5');

module.exports = {
  mode: 'development',
  entry: {
    polyfills: './src/polyfills.ts',
    index: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new RxjsInsightsPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    port: 3000,
  },
};
