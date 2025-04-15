import path from "node:path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default {
  context: path.join(__dirname, "/src"),
  entry: "./main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
    publicPath: process.env.NODE_ENV === 'production' ? '/web/' : "/",
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production",
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
  plugins: [],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
