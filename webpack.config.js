// import {Configuration} from 'webpack'
// /**
//  * @type {Configuration}
//  */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry:"./src/main.js",
  output:{
    filename:'bundle.js'
  },
  mode:'none',
  module:{
    rules:[
      {
        test:/\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test:/\.md$/,
        use: [
          { loader: "html-loader" },
          { loader: "./markdown-loader" }
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'Webpack Plugin Sample',
      // meta:{
      //   viewport:'width=device-width'
      // }
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns:['public']
    }),
    new RemoveCommentsPlugin()
  ]
}
module.exports = config