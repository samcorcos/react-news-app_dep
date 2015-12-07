module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/dev-server',
		'./app/app.jsx'
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }
}
