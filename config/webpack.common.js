const path = require('path');
const paths = require('./paths');
const autoprefixer = require('autoprefixer');

// TODO: webpackMerge is probably better.
//       ...this is good enough for now.

const cssLoaders = [
  require.resolve('style-loader'),
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
    },
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebookincubator/create-react-app/issues/2677
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        }),
      ],
    },
  },
];

module.exports = {
  aliases: {
    '@styles': path.resolve(paths.appSrc, 'styles'),
  },
  commonLoaders: [
    {
      test: /\.scss$/,
      use: [
        ...cssLoaders,
        {
          loader: 'sass-loader',
        },
      ]
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    },
  ],
};
