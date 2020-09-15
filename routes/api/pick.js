const express = require('express')
const router = express.Router();

// const auth = require('../../middleware/auth')
const { check } = require('express-validator')

const { getPick, createPick, updatePick, deletePick } =  require('../../controllers/pick')

//@route    GET api/pick/
//@desc     Get pick for main page
//@access   Public
router.get('/', getPick)

//@route    POST api/pick
//@desc     Create pick
//@access   Private
router.post('/', [
  // auth,
  check("discover", "Discover field is required").not().isEmpty(),
  check("city", "City field is required").not().isEmpty(),
  check("museum", "Museum field is required").not().isEmpty(),
], createPick)

//@route    PUT api/pick/:id
//@desc     Update pick
//@access   Private
router.put('/:id', [
  // auth,
], updatePick)

//@route    DELETE api/pick/:id
//@desc     Delete pick
//@access   Private
router.delete('/:id', [
  // auth,
], deletePick)

module.exports = router;
