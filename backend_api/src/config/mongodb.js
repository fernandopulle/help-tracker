const mongoose = require('mongoose')

var dboptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

const getMongoURL = (options)=>{
    return `${options.url}`
}

const connect = (options, emitter) =>{
    emitter.once('boot.ok', ()=>{
        mongoose.connect(getMongoURL(options), dboptions).then(
            ()=>{ 
                emitter.emit('db.ok', mongoose)

            },
            err => { 
                emitter.emit('db.error', err)
            }
        )
    })
}


module.exports = Object.assign({}, {connect})