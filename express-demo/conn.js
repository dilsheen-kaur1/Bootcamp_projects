const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/buzzproject')

mongoose.connection.on('error', (err) => {
    console.log('Connection failed');
})
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database');
})