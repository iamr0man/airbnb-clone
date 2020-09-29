import { Router } from 'express'
import {auth, guest, catchAsync} from "../middleware";

const router = Router()

import { getRequest, createRequest } from '../controllers'

//@route    GET api/request/
//@desc     Get request
//@access   Public
router.get('/', catchAsync(getRequest))

//@route    POST api/request
//@desc     Create request
//@access   Private
router.post('/', [
    // check("discover", "Discover field is required").not().isEmpty(),
    // check("city", "City field is required").not().isEmpty(),
    // check("museum", "Museum field is required").not().isEmpty(),
], catchAsync(createRequest))

//@route    PUT api/request/:id
//@desc     Update pick
//@access   Private
// router.put('/:id', auth, [
// ], catchAsync(updatePick))

//@route    DELETE api/request/:id
//@desc     Delete pick
//@access   Private
// router.delete('/:id', auth, [
// ], catchAsync(deletePick))

export { router as request }

