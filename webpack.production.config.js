const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { version } = require('./package.json');

module.exports = {
  entry: './src/index.jsx',
  mode: 'production',
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?|pn|sv)g$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  output: {
    clean: true,
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/assets',
          to: path.join(__dirname, 'dist/assets'),
        },
        { from: 'public/CNAME', to: path.join(__dirname, 'dist') },
        { from: 'public/squircle.min.js', to: path.join(__dirname, 'dist') },
      ],
    }),
    new DotenvWebpack({
      path: './.env.production',
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
        isDevelopment: false,
        isIndexed: true,
        referrer: 'strict-origin-when-cross-origin',
        title: "Home | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io',
        version,
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
        isDevelopment: false,
        isIndexed: true,
        referrer: 'strict-origin-when-cross-origin',
        title: "About | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/about',
        version,
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
        isDevelopment: false,
        isIndexed: true,
        referrer: 'strict-origin-when-cross-origin',
        title: "Projects | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/projects',
        version,
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
        isDevelopment: false,
        isIndexed: true,
        referrer: 'strict-origin-when-cross-origin',
        title: "Open Colleges’ Design System | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/projects/open-colleges-design-system',
        version,
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
        isDevelopment: false,
        isIndexed: true,
        referrer: 'strict-origin-when-cross-origin',
        title: "Personal Brand | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/projects/personal-brand',
        version,
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
        isDevelopment: false,
        isIndexed: true,
        referrer: 'strict-origin-when-cross-origin',
        title: "The Weather | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io/projects/weather',
        version,
      },
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      inject: 'body',
      template: './public/index.html',
      templateParameters: {
        description:
          "Welcome to Daniel Maddison's portfolio. Explore projects, learn about my skills and experience, and get in touch for collaboration opportunities.",
        image: {
          alt: '',
          src: '/assets/thumbnail.svg',
        },
        isDevelopment: false,
        isIndexed: false,
        referrer: 'strict-origin-when-cross-origin',
        title: "Page Not Found | Daniel Maddison's Portfolio",
        url: 'https://www.danielmaddison.io',
        version,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['./src', 'node_modules'],
  },
};
