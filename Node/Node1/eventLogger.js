const EventEmitter = require('events')
const emitter = new EventEmitter()

var url = 'https://mylogger.io/log';
function log(message){
    //send HTTP request
    console.log(message);
    emitter.emit('messageLogged',{id:1, url:'https://'})
}

module.exports = log