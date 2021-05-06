const path = require('path');

module.exports = function (env, argv) {
  env = env || {};

  return [{
    name: 'extension',
    target: 'node',
    mode: 'none',
    entry: {
      extension: './src/extension.ts'
    },
    module: {
      rules: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }]
    },
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'src')],
      mainFiles: ['index'],
      extensions: ['.js', '.ts', '.json']
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'out'),
      libraryTarget: "commonjs2",
      publicPath: '/',
      devtoolModuleFilenameTemplate: "../[resource-path]"
    },
    externals: {
      'applicationinsights-native-metrics': 'commonjs applicationinsights-native-metrics', // ignored because we don't ship native module
      'diagnostic-channel-publishers': 'commonjs diagnostic-channel-publishers',
      vscode: 'commonjs vscode'
    },
    devtool: 'source-map'
  }]
};
