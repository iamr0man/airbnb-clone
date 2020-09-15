const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { validationResult } = require('express-validator')

const User = require('../models/User')

exports.createUser = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, information } = req.body;

    try {
        let user = await User.findOne({ email: email })

        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        }

        // const avatar = gravatar.url(email, {
        //     s: '200',
        //     r: 'pg',
        //     d: 'mm'
        // })

        user = new User({
            name,
            email,
            information
            // avatar,
            // password
        })

        // const salt = await bcrypt.genSalt(10)
        //
        // user.password = await bcrypt.hash(password, salt);

        await user.save()

        // const payload = {
        //     user: {
        //         id: user.id
        //     }
        // }

        // jwt.sign(payload, config.get('jwtSecret'),
        //     {expiresIn: 360000},
        //     (err, token) => {
        //         if(err) throw err;
        //         user.token = token;
        //         res.json({ user })
        //     }
        // )
        res.status(201).json(user)

    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}