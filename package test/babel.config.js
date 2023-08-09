module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx'],
        root: ['.'],
        alias: {
          app: './src/app',
          assets: './assets',
          utils: './src/utils',
          navigation: './src/navigation',
          styles: './src/styles',
          store: './src/store',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
