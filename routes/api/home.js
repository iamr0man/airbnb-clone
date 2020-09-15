const express = require('express')
const router = express.Router();

// const auth = require('../../middleware/auth')
const { check } = require('express-validator')

const { getHome, createHome, updateHome, deleteHome } =  require('../../controllers/home')

//@route    GET api/home/:id/
//@desc     Get home
//@access   Public
router.get('/:id', getHome)

//@route    POST api/home
//@desc     Create home
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
], createHome)

//@route    PUT api/home/:id
//@desc     Update home
//@access   Private
router.put('/:id', [
  // auth,
], updateHome)

//@route    DELETE api/home/:id
//@desc     Delete home
//@access   Private
router.delete('/:id', [
  // auth,
], deleteHome)

module.exports = router;
