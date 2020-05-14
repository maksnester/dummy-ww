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
      {
        test: /\.rs$/,
        use: [
          {
            loader: "webassembly-loader",
            options: {
              export: "async-instance"
            }
          },
          {
            loader: "rust-native-wasm-loader",
            options: {
              release: true
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    libraryTarget: "umd",
    globalObject: "this",
    filename: "index.js",
    path: path.resolve(__dirname, "lib"),
  },
};
