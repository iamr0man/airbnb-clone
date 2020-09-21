import { Router } from 'express'
import {auth, guest, catchAsync} from "../middleware";

const router = Router()

import { getPick, createPick, updatePick, deletePick } from '../controllers'

//@route    GET api/pick/
//@desc     Get pick for main page
//@access   Public
router.get('/', catchAsync(getPick))

//@route    POST api/pick
//@desc     Create pick
//@access   Private
router.post('/', [
  // check("discover", "Discover field is required").not().isEmpty(),
  // check("city", "City field is required").not().isEmpty(),
  // check("museum", "Museum field is required").not().isEmpty(),
], catchAsync(createPick))

//@route    PUT api/pick/:id
//@desc     Update pick
//@access   Private
router.put('/:id', auth, [
], catchAsync(updatePick))

//@route    DELETE api/pick/:id
//@desc     Delete pick
//@access   Private
router.delete('/:id', auth, [
], catchAsync(deletePick))

export { router as pick }

