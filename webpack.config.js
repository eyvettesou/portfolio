const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'assets/bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'src')
  },
  performance: { hints: false },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        use: 'react-hot-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg|md)$/,
        use: [
          {
            loader: 'url-loader?limit=1000000'
          }
        ]
      }
    ]
  }
}
module.exports = config
