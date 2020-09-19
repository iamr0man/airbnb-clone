import { Router } from 'express'
import {auth, guest, catchAsync} from "../middleware";
import {logIn, logOut} from "../services";
import {loginSchema, validate} from "../validation";
import {User} from "../models/user";
import {BadRequest} from "../errors";

const router = Router()

router.post('/login', guest, catchAsync(async (req, res) => {
    await validate(loginSchema, req.body)

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(!user || !user.matchesPassword(password)) {
        return new BadRequest('Incorrect email or password')
    }
    await logIn(req, user.id)

    res.json({ message: 'You are logged in'})
}))
router.post('/logout', auth, catchAsync(async (req, res) =>{
    await logOut(req, res)

    res.json({ message: 'You are logout'})
}))

export { router as login}