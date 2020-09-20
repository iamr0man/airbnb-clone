import {loginSchema, validate} from "../validation";
import {User} from "../models/user";
import {BadRequest} from "../errors";
import { setParamsInSession, destroySession } from '../services/'

export const logIn = async (req, res) => {
    await validate(loginSchema, req.body)

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(!user || !user.matchesPassword(password)) {
        return new BadRequest('Incorrect email or password')
    }
    await setParamsInSession(req, user.id)

    res.json({ message: 'You are logged in'})
}

export const logOut = async (req, res) =>{
    await destroySession(req, res)

    res.json({ message: 'You are logout'})
}
