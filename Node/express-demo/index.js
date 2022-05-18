const Joi = require('joi');
const logger = require('./logger')
const authenticating = require('./logger')
const express = require('express');
const res = require('express/lib/response');
const app = express()//this results an object
app.use(express.json())//this is written so we can pass json objects in body, by default this is disabled in json
//this line adds a piece of middleware

// app.use(express.urlencoded());//this comes helpful when data is send in key-value pairs

app.use(logger)
// app.use(authenticating)

const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
]

//app.get(),app.post(),app.put(),app.delete()

//first arguments is path next is callback functions
app.get('/',(req,res)=>{
    res.send('hello world!!!')
})

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

// app.get('/api/courses/:id',(req,res)=>{
//     res.send(req.params.id)//this will give id passed
// })
app.get('/api/courses/:id',(req,res)=>{
    //req.params.id will return a string in order to convert it we use parseInt
    const course =  courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send('Given course was not found')
    res.send(course)
})

app.get('/api/courses/:year/:month',(req,res)=>{
    res.send(req.params)
})

//see query string parameters
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query)
})


//post request to add a new course
app.post('/api/courses',(req,res)=>{
    //input validation using JOI package
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    const result = schema.validate(req.body);
    console.log(result);
    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return;
    }

    //input validation
    // if(!req.body.name || req.body.name.length<3){
    //     res.status(400).send('Name is required & min 3 chars')
    //     return;
    // }
    
    const course = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course)//add in course array
    res.send(course)//this added object should also be sent to client
})


app.put('/api/courses/:id',(req,res)=>{
    //if course doesn't exist return 404
    const course =  courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send('Given course was not found')
    
    //if invalid return 400 bad request
    // const schema = {
    //     name: Joi.string().min(3).required()
    // }
    // const result = Joi.validate(req.body,schema);
    // console.log(result);
    // if(result.error){
    //     res.status(400).send(result.error.details[0].message)
    //     return;
    // }


    //or return updated course
    course.name = req.body.name;
    res.send(course)




})

const port =  process.env.PORT || 3000;//setting environment variable(if port is set use that otherwise use 3000)
app.listen(port,()=>console.log(`listening on port ${port}`));