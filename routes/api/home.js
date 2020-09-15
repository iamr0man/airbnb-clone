const express = require('express')
const router = express.Router();

// const auth = require('../../middleware/auth')
const { check } = require('express-validator')

const { getHome, createOrUpdateHome } =  require('../../controllers/home')

//@route    GET api/home/:id/
//@desc     Get home
//@access   Public
router.get('/:id', getHome)

//@route    POST api/post
//@desc     Create post
//@access   Private

router.post('/', [
  // auth,
  check("name", "").not().isEmpty(),
  check("location", "").not().isEmpty(),
  check("photos", "").not().isEmpty(),
  check("apartmentType", "").not().isEmpty(),
  check("apartmentRoomsDetails", "").not().isEmpty(),
  check("textDetails", "").not().isEmpty(),
  check("pricePerNight", "").not().isEmpty(),
], createOrUpdateHome)

//@route    DELETE api/post/:id
//@desc     Delete post
//@access   Private
// router.delete('/:id', [
//   auth,
//   check("id", ""),
// ], deletePost)

module.exports = router;
