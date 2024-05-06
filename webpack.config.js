const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
               filename: 'images/[name][ext]'
            }
        }
        ],
      },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo List'
        }),
  ],
};