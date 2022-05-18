const EventEmitter = require('events'); 
const emitter = new EventEmitter()

emitter.on('messageLogged',(arg)=>{//paramenter
    console.log('listener called',arg);
})

const log = require('./logger')
log('message')
//this will display message only not the event data
//because both event emitter & listener are using different emitter objects
//one is defined here and another is defined in another file