const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const start = (options) =>{
    return new Promise((resolve, reject)=>{
        if(!options.port){
            reject(new Error('Port should be available'))
        }

        const app = express()
        app.use(morgan('dev'))
        app.use(helmet())
        app.use((err, req, res, next) => {
            reject(new Error('Something went wrong!, err:' + err))
            res.status(500).send('Something went wrong!')
          })

        // start the server
        const server = app.listen(options.port, () => resolve(server))
        
    })
}

module.exports = Object.assign({},{start})