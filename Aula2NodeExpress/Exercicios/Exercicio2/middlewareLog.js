const middlewareLog = (req, res, next) => {
    const fs = require('fs')
    fs.appendFileSync('./logs.txt', Date.now() + ' . ')
    next()
}

module.exports = middlewareLog