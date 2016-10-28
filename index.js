// const {pick} = require('lodash')

function salo(err) {
  const c = {
    name: err.name,
    message: err.message,
    stack: err.stack
      .replace(/\s+at\s+/g, '{#}at ')
      .split('{#}')
  };
  ['code', 'response', 'constraint'].forEach(function (name) {
    if (err[name]) {
      c[name] = err[name]
    }
  })
  return c
}

salo.express = function (res) {
  return function (err) {
    res.json(salo(err))
  }
}

module.exports = salo
