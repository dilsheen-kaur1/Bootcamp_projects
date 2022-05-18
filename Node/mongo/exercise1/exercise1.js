const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(()=>console.log('Connected to mongo..'))
    .catch((err)=>console.error('Failed to connect ',err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    date: Date,
    isPublished: Boolean,
    price: Number,
    tags: [ String ]
})
const Courses = mongoose.model('Course',courseSchema)

async function getCourse(){
    const courses = await Courses
        .find({isPublished: true, tags: 'backend'})
        .select({name: 1, author: 1})
        .sort('name author')
    console.log(courses);
}
getCourse()

