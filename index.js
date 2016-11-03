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

salo.express = function (res, statusCode) {
  return function (err) {
    err = salo(err)
    res
      .status(statusCode || 500)
      .json(err)
  }
}

salo.http = function (res, statusCode) {
  return function (err) {
    err = salo(err)
    res.writeHead(statusCode || 500, {
      'content-type': 'application/json; charset=utf-8'
    })
    res.end(JSON.stringify(err))
  }
}

module.exports = salo
