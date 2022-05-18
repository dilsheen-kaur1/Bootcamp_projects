const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(()=>console.log('connected to mongo...'))
    .catch(err=>console.error('failed',err))

const schema = new mongoose.Schema({
    name: String,
    author: String,
    date: Date,
    tags: [ String ],
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('course',schema)
async function getCourse(){
    const courses = await Course
    .find({isPublished: true})
    .or([{price: {$gte: 15}}, {name: /.*by.*/i}])
    .select('name author price')
    .sort('-price')
    console.log(courses);
}

getCourse()