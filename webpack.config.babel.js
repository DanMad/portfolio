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
      patterns: [{ from: path.join(__dirname, './src/public'), to: '.' }],
    }),
    ...pages.map((page) => {
      const dirname = 'dirname' in page ? page.dirname : './';
      const filename = 'filename' in page ? page.filename : 'index.html';
      const styles = 'styles' in page ? page.styles : '';
      const fullName = name.full.toTitleCase();
      const pageTitle = page.title.toTitleCase();

      return new HtmlWebpackPlugin({
        inject: 'body',
        filename: dirname + filename,
        template: path.join(__dirname, './src/html/index.html'),
        templateParameters: {
          name: fullName,
          namespace,
          title: pageTitle + ' | ' + fullName,
          styles,
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
        historyApiFallback: true,
        port: 3000,
        static: path.join(__dirname, './dist'),
      },
      mode: 'development',
      output: {
        filename: 'js/app.js',
        publicPath: 'http://localhost:3000',
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
