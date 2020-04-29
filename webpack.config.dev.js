const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/Index.tsx",
  output: {
    filename: "./js/bundle.js"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      },
      {
        test: /\.(mp4|png|jpg)?$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },

  devServer: {
    open: true,
    contentBase: path.join(__dirname, "./dist"),
    watchContentBase: true,
    port: 3000
  }
};
