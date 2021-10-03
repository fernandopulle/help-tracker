const {EventEmitter} = require('events')
const server = require('./server/server')
const config = require('./config')
const emitter = new EventEmitter()


emitter.on('db.ok', (db)=>{
    console.log('database connected')

    return server.start({port: config.serverSettings.port}).then(
        app =>{
            console.log(`Server started succesfully, running on port:${config.serverSettings.port}`)
        }
    )

})

emitter.on('db.error', (err)=>{
    console.error(err)
})

config.db.connect(config.dbSettings, emitter);
emitter.emit('boot.ok')


