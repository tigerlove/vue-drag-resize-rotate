var config = require('./webpack.base.conf.js')

config.entry = {
  'vue-drag-resize-rotate': 'src/index.js',
}

config.output = {
  filename: 'dist/[name].js',
  library: 'VueDragResizeRotate',
  libraryTarget: 'umd'
}

module.exports = config
