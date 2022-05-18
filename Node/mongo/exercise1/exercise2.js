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

const Courses =  mongoose.model('course',schema);
async function getCourse(){
    const courses = await Courses
    // .find({isPublished: true, tags: {$in: ['frontend','backend']}}) // OR
    .find({isPublished: true})
    .or([{tags: 'frontend'}, {tags: 'backend'}])
    .select('name author price')
    .sort({price: -1})
    console.log(courses);
}

getCourse()