/* Copyright G. Hemingway, @2024 - All rights reserved */
"use strict";

import path from "node:path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default {
  context: path.join(__dirname, "/src/client"),
  entry: "./main.js",
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/js"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
