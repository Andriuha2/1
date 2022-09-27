const path = require("path");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
console.log(mode);

module.exports = {
  mode: mode,

  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          //without additional bable settings, this will reference bablerc
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "source-map",

  devServer: {
    static: "./public",
  },
};
