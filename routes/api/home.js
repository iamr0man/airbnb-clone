const express = require('express')
const router = express.Router();

// const auth = require('../../middleware/auth')
// const { check } = require('express-validator')

const { getHome } =  require('../../controllers/home')

//@route    GET api/home/:id/
//@desc     Get home
//@access   Public
router.get('/:id', getHome)

//@route    POST api/post
//@desc     Create post
//@access   Private

// router.post('/', [
//   auth,
//   check("title", "").not().isEmpty(),
//   check("preview", "").not().isEmpty(),
//   check("shortDescription", "").not().isEmpty(),
//   check("description", "").not().isEmpty(),
//   check("name", ""),
// ], createPost)

//@route    DELETE api/post/:id
//@desc     Delete post
//@access   Private
// router.delete('/:id', [
//   auth,
//   check("id", ""),
// ], deletePost)

module.exports = router;
