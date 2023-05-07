exports.handlers = {
  parseBegin(sourcefiles) {
    console.log('fileBegin filename -> ', sourcefiles)
  },
  fileBegin: function (filename) {
    // Do something when we see a new doclet
    console.log('fileBegin filename -> ', filename)
  }
}