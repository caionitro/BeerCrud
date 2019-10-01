var path = require('path');
var rootDir = path.join(__dirname, '..');
var publicDir = path.join(rootDir, 'public');

module.exports = {
  views: path.join(publicDir, 'views/')
};

