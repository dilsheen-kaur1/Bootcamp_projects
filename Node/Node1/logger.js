const EventEmitter = require('events')
// const emitter = new EventEmitter()
var url = 'https://mylogger.io/log';


//we want Logger class to have all the functionalities of EventEmitter
class Logger extends EventEmitter{
    //a function is a method in a class we don't write function keyword
    log(message){
        //send HTTP request
        console.log(message);
        this.emit('messageLogged',{id:1, url:'https://'})
    }
}

// module.exports.log = log;//to export 
// module.exports.endPoint = url;

//we can export an object or a function
module.exports = Logger