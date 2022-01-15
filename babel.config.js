module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: require('./mappings.json'),
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    ],
  ],
};
