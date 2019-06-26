const path = require('path');

module.exports = {
  process(jsrc, filename /*, config, options */) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
