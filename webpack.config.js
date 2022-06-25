const path = require("path");

module.exports = {
  mode: "production",
  entry: "./packages/component/Add/index.tsx",
  output: {
    clean: true,
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  }
};
