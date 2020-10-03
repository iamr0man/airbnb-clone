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
        earnedAllTime,
        confirmedNights,
        reviews
    } = req.body

    const userFields: any = {}

    if(name) { userFields.name = name }
    if(avatar) { userFields.avatar = avatar }
    if(email) { userFields.email = email }
    if(information) { userFields.information = information }
    if(earnedAllTime) {
        const user = await User.findById(req.session!.userId)
        userFields.earnedAllTime = user.earnedAllTime + earnedAllTime
    }
    if(confirmedNights) {
        const user = await User.findById(req.session!.userId)
        userFields.confirmedNights = user.confirmedNights + confirmedNights
    }
    if(reviews) { userFields.reviews = reviews }
    if(reviews) { userFields.reviews = reviews }

    const user = await User.findOneAndUpdate(
        {_id: req.session!.userId},
        {$set: userFields},
        {new: true}
    );

    res.json(user)
}))

export { router as me }