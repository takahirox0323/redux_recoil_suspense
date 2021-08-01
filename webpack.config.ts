import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import * as WebPack from "webpack";

const config: WebPack.Configuration = {
  entry: "./src/index.tsx",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      hash: true,
    }),
  ],
  // ファイルの出力設定
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "react-svg-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
    extensions: [".mjs", ".ts", ".tsx", ".js", ".json"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  // target: ["web", "es5"],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.mode = "development";
    config.devtool = "cheap-module-eval-source-map";
    config.devServer = {
      contentBase: `dist`,
      port: 8000,
      open: true,
      hot: true,
      historyApiFallback: true,
    };
  }

  if (argv.mode === "production") {
    config.mode = "production";
    config.optimization = {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true },
          },
        }),
      ],
    };
  }

  return config;
};
