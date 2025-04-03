const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('./package.json');

module.exports = {
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/assets',
          to: path.join(__dirname, 'dist/assets'),
        },
        { from: 'public/squircle.min.js', to: path.join(__dirname, 'dist') },
      ],
    }),
    new DotenvWebpack({
      path: './.env.development',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: './public/index.html',
      templateParameters: {
        description:
          "Welcome to Daniel Maddison's portfolio. Explore projects, learn about my skills and experience, and get in touch for collaboration opportunities.",
        image: {
          alt: '',
          src: '/assets/thumbnail.svg',
        },
        isDevelopment: true,
        isIndexed: true,
        package,
        title: "Home | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io',
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'about/index.html',
      inject: 'body',
      template: './public/index.html',
      templateParameters: {
        description:
          "Welcome to Daniel Maddison's portfolio. Explore projects, learn about my skills and experience, and get in touch for collaboration opportunities.",
        image: {
          alt: '',
          src: '/assets/thumbnail.svg',
        },
        isDevelopment: true,
        isIndexed: true,
        package,
        title: "About | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/about',
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'projects/index.html',
      inject: 'body',
      template: './public/index.html',
      templateParameters: {
        description:
          "Welcome to Daniel Maddison's portfolio. Explore projects, learn about my skills and experience, and get in touch for collaboration opportunities.",
        image: {
          alt: '',
          src: '/assets/thumbnail.svg',
        },
        isDevelopment: true,
        isIndexed: true,
        package,
        title: "Projects | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/projects',
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'projects/open-colleges-design-system/index.html',
      inject: 'body',
      template: './public/index.html',
      templateParameters: {
        description:
          "Welcome to Daniel Maddison's portfolio. Explore projects, learn about my skills and experience, and get in touch for collaboration opportunities.",
        image: {
          alt: '',
          src: '/assets/thumbnail.svg',
        },
        isDevelopment: true,
        isIndexed: true,
        package,
        title: "Open Colleges’ Design System | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/projects/open-colleges-design-system',
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'projects/personal-brand/index.html',
      inject: 'body',
      template: './public/index.html',
      templateParameters: {
        description:
          "Welcome to Daniel Maddison's portfolio. Explore projects, learn about my skills and experience, and get in touch for collaboration opportunities.",
        image: {
          alt: '',
          src: '/assets/thumbnail.svg',
        },
        isDevelopment: true,
        isIndexed: true,
        package,
        title: "Personal Brand | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/projects/personal-brand',
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'projects/weather/index.html',
      inject: 'body',
      template: './public/index.html',
      templateParameters: {
        description:
          "Welcome to Daniel Maddison's portfolio. Explore projects, learn about my skills and experience, and get in touch for collaboration opportunities.",
        image: {
          alt: '',
          src: '/assets/thumbnail.svg',
        },
        isDevelopment: true,
        isIndexed: true,
        package,
        title: "The Weather | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/projects/weather',
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['./src', 'node_modules'],
  },
};
