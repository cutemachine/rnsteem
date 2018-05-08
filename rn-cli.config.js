const nodelibs = require('node-libs-react-native')

const vm = require.resolve('vm-browserify')

module.exports = {
  extraNodeModules: {
    ...nodelibs,
    vm
  }
}
