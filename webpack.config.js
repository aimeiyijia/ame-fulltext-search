const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/lunrclient.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },
  target: 'node',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/search.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
