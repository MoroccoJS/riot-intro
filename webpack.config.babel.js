import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

let extractHTML = new ExtractTextPlugin('index.html')

const config = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'js/bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    extractHTML
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs',
        query: { type: 'babel' }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: extractHTML.extract('html')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.tag']
  },
  devServer: {
    contentBase: 'dist'
  }
}

export default config
