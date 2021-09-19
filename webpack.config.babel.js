import 'on-the-case';
import CnameWebpackPlugin from 'cname-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import tokenImporter from 'node-sass-token-importer';
import { address, name, namespace, pages } from './src/config';

const commonWebpackConfig = {
  entry: './src/js/app.jsx',
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
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: tokenImporter(),
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CnameWebpackPlugin({
      domain: address.domain,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(__dirname, './src/static'), to: '.' }],
    }),

    ...pages.map((page) => {
      return new HtmlWebpackPlugin({
        inject: 'body',
        filename: './' + page.path + page.fileName,
        template: path.join(__dirname, './src/html/index.html'),
        templateParameters: {
          name: name.full.toTitleCase(),
          namespace,
          styles: page.styles,
          title: page.title + ' | ' + name.full.toTitleCase(),
        },
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

const webpackConfig = (env) => {
  if (env.development) {
    return {
      ...commonWebpackConfig,
      devServer: {
        historyApiFallback: {
          rewrites: [
            ...pages
              .filter((page) => page.path !== '')
              .map((page) => ({
                from: new RegExp('/' + page.path.slice(0, -1)),
                to: '/' + page.path + page.fileName,
              })),
            { from: /./, to: '/404.html' },
          ],
        },
        port: 3000,
        static: ['src/static'],
      },
      mode: 'development',
      output: {
        filename: 'js/app.js',
        publicPath: '/',
      },
    };
  }

  return {
    ...commonWebpackConfig,
    mode: 'production',
    output: {
      filename: 'js/app.js',
      publicPath: address.URL,
    },
  };
};

export { webpackConfig as default };
