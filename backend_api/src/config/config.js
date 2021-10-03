require('dotenv').config()

const dbSettings ={
    url: process.env.dburl 
}

const serverSettings = {
    port: process.env.PORT || 3000
}


module.exports = Object.assign({}, {dbSettings, serverSettings})