// var logger =  require('./logger');//to load module
// // console.log(logger);
// logger('hwll')

// const path =  require('path');//gives us imformation about operating system
// var pathObj = path.parse(__filename);
// console.log(pathObj);//gives path object


// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`total memory: ${totalMemory} `);
// console.log(`Free memory: ${freeMemory} `);


// const fs = require('fs')
// //sync task
// // const files = fs.readdirSync('./')
// // console.log(files);

// //asyn task
// fs.readdir('./',function(err,files){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('result ',files);
//     }
// })


//captial E indicates its a class
//this will have methods
// const EventEmitter = require('events'); 
// const emitter = new EventEmitter()//this is an object

//we need listener to call this message(register a listener)
//first argument is name of listener, second is callback
// emitter.on('messageLogged',function(arg){//paramenter
//     console.log('listener called',arg);
// })

// emitter.on('messageLogged',(arg)=>{//paramenter
//     console.log('listener called',arg);
// })

// //used to raise an emit(making a noise)
// emitter.emit('messageLogged',{id:1, url:'https://'})//id & url are event arguments(any data we want to send)

// emitter.on('logging',(arg)=>{
//     console.log(arg);
// })
// emitter.emit('logging',{message:'hello world'})

//used to define emitter in a different module
const Logger = require('./logger')//clas
const logger = new Logger();//object

// //register a listener
logger.on('messageLogged',(arg)=>{//paramenter
    console.log('listener called',arg);
})
logger.log('message')



//HTTP module
const http = require('http');

// const server = http.createServer()//this server is event emitter
//register a listener(connection is name of event & second argument is callback func)
//display this whener connection is made
// server.on('connection',(socket)=>{
//     console.log('New connection');
// })

//passing a callback function
//req=>request
//res=>response
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('hello world')
        res.end()
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
})
server.listen(3000)//give this object a port

console.log('listening on port 3000...');