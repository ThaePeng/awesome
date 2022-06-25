const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./packages/web/index.tsx",
  output: {
    clean: true,
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       extractComments: false, //禁止生成注释到LICENSE.txt
  //     }),
  //   ],
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./packages/web/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
