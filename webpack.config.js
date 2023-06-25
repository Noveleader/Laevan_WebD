const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
  resolve: {
    fallback: {
        "crypto": false
    },
  },
};
