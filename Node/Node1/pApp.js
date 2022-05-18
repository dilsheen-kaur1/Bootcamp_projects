const NewEmitter = require('events')
const emitter = new NewEmitter();

emitter.on('displayMessage',(arg)=>{
    console.log(arg.data);
})

emitter.emit('displayMessage',{data:'123',no:16})