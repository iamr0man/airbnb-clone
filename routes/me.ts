import { Router } from 'express'
import {auth, catchAsync} from "../middleware";
import {User} from "../models/user";

const router = Router()

router.get('/', auth, catchAsync(async (req, res) => {
    const user = await User.findById(req.session!.userId)
    res.json(user)
}))

export { router as me }