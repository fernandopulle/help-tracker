const {dbSettings, serverSettings} = require('./config')
const db = require('./mongodb')

module.exports = Object.assign({}, {db,dbSettings, serverSettings})