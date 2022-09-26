module.exports = {
  mode: "development",

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
    static: "./dist",
  },
};
