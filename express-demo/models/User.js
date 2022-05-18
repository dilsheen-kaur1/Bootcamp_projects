var mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
        min: 4,
        max: 15,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // for reset password
    resetLink: {
        data: String,
        default: ''
    }
});

module.exports = User = mongoose.model('userSchema', userSchema);