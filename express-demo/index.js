const express = require('express')
const mongoose = require('./conn')
var bodyparser = require('body-parser')
const fileUpload = require('express-fileupload')
const logger = require('./middleware/logger');
const authentication = require('./middleware/authentication');
const authRoute = require('./routes/auth')
const feedRoute = require('./routes/feed')
const app = express(); // this represents our application
const { cloudinary } = require('./utils/cloudinary')

app.use(express.json({limit:'50mb'})); // enable parsing up in the json objects in the body of the request
app.use(express.urlencoded({ extended: true })); // parses incoming requests with url encode payloads.  --> key=value&key=value
app.use(fileUpload({
    useTempFiles:true
}))
app.use(logger);
app.use(authentication);
app.use('/api/auth', authRoute);
app.use('/api/feed', feedRoute);

app.get('/', (req,res) => {
    res.status(200).send('Welcome to the Login and SignUp API')
})

// app.post('/api/post',async(req,res)=>{
//     try {
//         const fileStr = req.files.photo
//         const uploadedResponse = await cloudinary.uploader.upload(fileStr.tempFilePath,(err,result)=>{
//             console.log(result);
//             // result.url
//         })
//         console.log(uploadedResponse);
//         res.json({msg: 'uploaded'})
//     } catch (error) {
//         console.log(error);
//     }
// })

app.post('/post',async(req,res)=>{
    try {
        const fileStr = req.files.photo
        console.log(fileStr);
        const uploadedResponse = await cloudinary.uploader.upload(fileStr.tempFilePath,async(err,result)=>{
            const newPost = new Post({
                description: req.body.description,
                url: result.url,
                publicId:result.public_id,
                creationDate: new Date(),
                userId:req.body.userId,   
            });
            await newPost.save()
            newPost.createdAt; 
            newPost.updatedAt; 
            newPost.createdAt instanceof Date;
        })
        res.json({msg: 'uploaded'})
    } catch (error) {
        console.log(error);
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`))