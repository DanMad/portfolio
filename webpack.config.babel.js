import 'on-the-case';
import CnameWebpackPlugin from 'cname-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import tokenImporter from 'node-sass-token-importer';
import { address, name, namespace, pages } from './src/config';

const commonHtmlWebpackConfig = {
  inject: 'body',
  template: path.join(__dirname, './src/html/index.html'),
};

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
    new HtmlWebpackPlugin({
      ...commonHtmlWebpackConfig,
      filename: './index.html',
      meta: {
        'og:image': '/images/index.png',
      },
      templateParameters: {
        namespace,
        title: name.full.toTitleCase(),
      },
    }),
    new HtmlWebpackPlugin({
      ...commonHtmlWebpackConfig,
      filename: './404.html',
      templateParameters: {
        namespace,
        title: `Uh-oh! | ${name.full}`.toTitleCase(),
      },
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          ...commonHtmlWebpackConfig,
          filename: `./${page.toKebabCase()}/index.html`,
          meta: {
            'og:image': `/images/${page}.png`,
          },
          templateParameters: {
            namespace,
            title: `${page} | ${name.full}`.toTitleCase(),
          },
        }),
    ),
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
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        port: 3000,
      },
      mode: 'development',
      output: {
        filename: 'js/app.js',
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
