const express = require('express');
const router = express.Router();
const Joi = require('joi');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var User = require('../models/User');

// --- SignUp Route ----- 
router.post('/signup', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save()
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json(err)
    }

    // let regex = new RegExp('[a-z0-9]+@tothenew.com');
    // if(regex.test.newUser.email){
    //     console.log('Valid email')
    // } else {
    //     console.log('Please sign in with TTN email')
    // }

});


// --- Login Route ----- 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!validPassword) {
            return res.status(400).json("wrong password");
        } 

        // generate JWT Token
        var token = jwt.sign({
            name: user.name,
            password: user.password
        },
            'secret',
            { expiresIn: "1h"}
        );

        res.status(200).json({
            message: "User Authenticated",
            token: token,
            user_id: user._id
        });

        res.status(404).json({
            message: "User not authenticated"
        })
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;