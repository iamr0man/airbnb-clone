const express = require('express')
const router = express.Router();

const auth = require('../../middleware/auth')  
const { check } = require('express-validator')

const { getAllPoints,createPoint, likeExpe, unlikeExpe, deletePoint } =  require('../../controllers/expe') 

//@route    GET api/expe/all
//@desc     Get all points
//@access   Public
router.get('/all', getAllPoints)

//@route    POST api/expe
//@desc     Create info window
//@access   Public
router.post('/', [
  auth,
  // check("latitude", ""),
  // check("longitude", ""),
  // check("title", "").not().isEmpty(),
  // check("description", ""),
  // check("emoji", ""),
], createPoint)

//@route    PUT api/expe/like/:id
//@desc     Like expe    
//@access   Private
router.put('/like/:id', auth, likeExpe)

//@route    PUT api/expe/unlike/:id
//@desc     Unlike expe    
//@access   Private
router.put('/unlike/:id', auth, unlikeExpe)

//@route    DELETE api/expe/:id
//@desc     Delete info window
//@access   Private
router.delete('/:id', [
  auth,
  check("id", ""),
], deletePoint)

module.exports = router;
