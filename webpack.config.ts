import path from "path";
import { Configuration } from "webpack";
import { Configuration as devConfig } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
  devServer: {
    compress: true,
    port: 3000,
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundel.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      // {
      //   test: /\.dada.css$/i,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: "css-loader",
      //       options: {
      //         importLoaders: 1,
      //         modules: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};

export default config;
