const webpack = require("webpack");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: __dirname + "/src/main.jsx",
  devtool: "eval-source-map",
  output: {
    filename: "app.js",
    path: __dirname + "/public"
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': mode
      })
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
