const express = require('express')
const router = express.Router()
const Joi = require('joi');
const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const _ = require('lodash');

router.get('/',(req,res)=>{
    res.send('hello world')
})

router.post('/signUp',async(req,res)=>{
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    await user.save();  
    res.send(_.pick(user, ['_id', 'name', 'email']))
})

// router.post('/login',async (req,res)=>{
//     const result = schema.validate(req.body);
//     if(result.error){
//         res.status(400).send(result.error.details[0].message)
//         return;
//     }
//     let user = await User.findOne({ email: req.body.email });
//   if (!user) return res.status(400).send('Invalid email or password.');
// })

module.exports = router