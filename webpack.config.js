const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/index.ts",
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    libraryTarget: 'umd',
    filename: "index.js",
    path: path.resolve(__dirname, "lib"),
  },
};
