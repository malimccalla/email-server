if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dev');
} else {
  // return dev keys
  module.exports = require('./dev');
}
