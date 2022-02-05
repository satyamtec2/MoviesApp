const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App directory
//const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
//const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

// ... imports and variables

module.exports = {
  // Environment mode
  mode: 'development',

  // Entry point of app
  entry: {
    index: './index.web.js',
  },

  output: {
    // Development filename output
    filename: './bundle.js',
  },

  devServer: {
    // Serve index.html as the base
    static: {
      directory: path.join(__dirname, '/'),
      publicPath: '/index.html',
    },

    // Enable compression
    compress: true,

    // Enable hot reloading
    hot: true,

    host,

    port: 3000,
  },

  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          //presets: ['es2015', 'react'],
          presets: [require.resolve('babel-preset-react-app')],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};
