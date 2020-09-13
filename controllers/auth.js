const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.getAuthUser = async(req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch(error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
}

exports.doLogin = async(req, res) => {
    const errors = validationResult(req.body)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email })

        if(!user) {
            return res.status(400).json({ errors: [{ msg: 'User with this email was not found' }]})
        }

        const isMatch = bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invailid Password' }] })
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'),
            {expiresIn: "1h"},
            (err, token) => {
                if(err, token) {
                    if(err) throw err;
                    res.json({ user, token })
                }
            }
        )

    }catch(error){
        console.error(err.message)
        res.status(500).send('Server error')
    }
}