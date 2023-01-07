module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@root': './src',
            '@screens': './src/screens',
            '@components': './src/components',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
        },
      ],
    ],
  }
}
