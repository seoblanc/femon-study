const path = require("path");
// const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // webpack4 부터 entry, output 생략 가능
  // poliyfill은 진입점의 선두에서 먼저 선언
  entry: ['@babel/polyfill', './src/js/index.jsx'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].build.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"],
            plugins: []
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html", //파일 읽기
      filename: "index.html" //파일 출력
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
  })
  ]
}