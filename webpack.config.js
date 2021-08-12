const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const routes = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/portfolio/a-galaxy-far-far-away',
];

const commonConfig = {
  entry: './src/js/index',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, './src/public'), to: '.' }],
    }),
    ...routes.map((route) => {
      return new HtmlWebpackPlugin({
        filename: `.${route}/index.html`,
        inject: 'body',
        template: path.join(__dirname, './src/html/index.html'),
      });
    }),
  ],
  resolve: {
    alias: {
      'react/jsx-runtime': require.resolve('./node_modules/react/jsx-runtime'),
      react: require.resolve('./node_modules/react'),
      'react-dom': require.resolve('./node_modules/react-dom'),
    },
    extensions: ['.js', '.jsx'],
  },
};

module.exports = (env) => {
  if (env.development) {
    return {
      ...commonConfig,
      devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 3000,
      },
      mode: 'development',
      output: {
        filename: 'js/app.js',
      },
    };
  }

  return {
    ...commonConfig,
    mode: 'production',
    output: {
      filename: 'js/app.js',
      publicPath: 'https://danielmaddison.io',
    },
  };
};
