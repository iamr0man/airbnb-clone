import {User} from "../models/user";

const express = require('express')
const router = express.Router();

const {auth, catchAsync } = require('../middleware/')

const { getHome, createHome, updateHome, deleteHome } =  require('../controllers')

//@route    GET api/home/:id/
//@desc     Get home
//@access   Public
router.get('/:id', catchAsync(getHome))

//@route    POST api/home
//@desc     Create home
//@access   Private
router.post('/', [
  // auth,
  // check("name", "").not().isEmpty(),
  // check("location", "").not().isEmpty(),
  // check("photos", "").not().isEmpty(),
  // check("apartmentType", "").not().isEmpty(),
  // check("apartmentRoomsDetails", "").not().isEmpty(),
  // check("textDetails", "").not().isEmpty(),
  // check("pricePerNight", "").not().isEmpty(),
], catchAsync(createHome))

//@route    PUT api/home/:id
//@desc     Update home
//@access   Private
router.put('/:id', [
  // auth,
], catchAsync(updateHome))

//@route    DELETE api/home/:id
//@desc     Delete home
//@access   Private
router.delete('/:id', [
  // auth,
], catchAsync(deleteHome))

export { router as home }
