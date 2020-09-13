const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const { check } = require('express-validator')

const { getAuthUser, doLogin } = require('../../controllers/auth')

//@route    GET api/auth
//@desc     Get auth user
//@access   Public
router.get('/', auth, getAuthUser)

//@route    POST api/auth
//@desc     Authentication user & get token
//@access   Public
router.post('/', 
    [
    check('email', 'Please include a valid email').isEmail(),
    check(
        'password', 'Please is required').exists()
    ],
    doLogin
)

module.exports = router