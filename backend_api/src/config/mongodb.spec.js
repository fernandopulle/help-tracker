const {EventEmitter} = require('events')
require('dotenv').config()
const mongo = require('./mongodb')
const test = require('assert')
const {dbSettings} = require('./config')


describe('Mongo Connection' , ()=>{
    it('Emit db object with event emitter', (done)=>{
        const emitter = new EventEmitter()
        mongo.connect(dbSettings, emitter)
        emitter.emit('boot.ok')
    })
})