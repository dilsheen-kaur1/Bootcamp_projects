const express = require('express')
const mongoose = require('mongoose');
const logger = require('./middleware/logger')
const Joi = require('joi');
const app = express()
const auth = require('./routes/auth')

mongoose.connect('mongodb://localhost/buzz')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...',err));

app.use(logger)
app.use(express.json())
app.use('/',auth)

const port =  process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));