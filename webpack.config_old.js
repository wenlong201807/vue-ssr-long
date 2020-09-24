const path = require('path')
const VueLoader = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = dir => {
  return path.resolve(__dirname,dir)
}
module.exports = {
  // webpack 入口
  entry: resolve('./src/client-entry.js'),
  output: {
    filename: 'bundle.js',
    path:resolve('./dist')
  },
  resolve: {
    extensions:['.js','.vue']
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-env']
          }
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:['vue-style-loader','css-loader']
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoader(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:resolve('./public/index.html')
    })
  ]
}