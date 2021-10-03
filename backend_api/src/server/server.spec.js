const server = require("./server")
var chai = require('chai')
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

describe('Server', ()=>{
    it("Required a port to start", ()=>{
        return expect(server.start()).to.be.rejectedWith(/port/)
    })
})