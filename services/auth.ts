import { Request, Response } from "express";
import {SESSION_NAME} from "../config";
import {UserDocument} from "../models/user";

export const isLoggedIn = (req: Request) => {
    return !!req.session!.userId
}

export const setParamsInSession = (req: Request, userId) => {
    req.session!.userId = userId
    req.session!.createdAt = Date.now()
}

export const destroySession = (req: Request, res: Response, ) =>
    new Promise((resolve, reject) => {
        req.session!.destroy((err: Error) => {
            if(err) reject(err)

            res.clearCookie(SESSION_NAME)

            resolve()
        })
    })

export const markAsVerified = async (user: UserDocument) => {
    user.verifiedAt = new Date()
    await user.save()
}
