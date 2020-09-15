const express = require('express')
const router = express.Router();

const { check } = require('express-validator')

const { createUser } =  require('../../controllers/user')

//@route    POST api/users
//@desc     Create user
//@access   Public

router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('information', 'Information is required').not().isEmpty(),
    // check(
    //     'password',
    //     'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    createUser
)

module.exports = router;
