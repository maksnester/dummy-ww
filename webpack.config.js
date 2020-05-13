const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.worker\.[jt]s$/,
        use: {
          loader: "worker-loader",
          options: { inline: true, fallback: false },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    libraryTarget: "umd",
    filename: "index.js",
    path: path.resolve(__dirname, "lib"),
  },
};
