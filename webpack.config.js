const path = require('path');
const babel = require('./babel.config.json');

const commonConfig = {
  entry: './src/index',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: babel.presets,
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
        contentBase: path.join(__dirname, 'dist/'),
        port: 3000,
      },
      mode: 'development',
      output: {
        filename: 'app.js',
      },
    };
  }

  return {
    ...commonConfig,
    mode: 'production',
    output: {
      filename: 'app.js',
      publicPath: 'https://danmad.github.io/portfolio/',
    },
  };
};
