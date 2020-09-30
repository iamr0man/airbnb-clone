import { Router } from 'express'
import {auth, catchAsync} from "../middleware";
import {User} from "../models/user";

const router = Router()

router.get('/', auth, catchAsync(async (req, res) => {
    const user = await User.findById(req.session!.userId)
    res.json(user)
}))

router.put('/', auth, catchAsync(async (req, res) => {
    const { name,
        avatar,
        email,
        information,
        earnedInAMonth,
        reviews
    } = req.body

    const userFields: any = {}

    if(name) { userFields.name = name }
    if(avatar) { userFields.avatar = avatar }
    if(email) { userFields.email = email }
    if(information) { userFields.information = information }
    if(earnedInAMonth) {
        const user = await User.findById(req.session!.userId)
        userFields.earnedInAMonth = user.earnedInAMonth + earnedInAMonth
    }
    if(reviews) { userFields.reviews = reviews }

    const user = await User.findOneAndUpdate(
        {_id: req.session!.userId},
        {$set: userFields},
        {new: true}
    );

    res.json(user)
}))

export { router as me }