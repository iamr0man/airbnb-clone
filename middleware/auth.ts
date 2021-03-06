import { Request, Response, NextFunction } from 'express'
import {isLoggedIn, destroySession} from '../services'
import {BadRequest, Unauthorized} from "../errors";
import {catchAsync} from "./errors";
import {SESSION_ABSOLUTE_TIMEOUT} from "../config";

export const guest = (req: Request, res: Response, next: NextFunction) => {
    if(isLoggedIn(req)) {
        return next(new BadRequest('You are already logged in'))
    }
    next()
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if(!isLoggedIn(req)){
        return next(new Unauthorized('You must be logged in'))
    }
    next()
}

export const active = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if(isLoggedIn(req)) {
        const now = Date.now()
        const { createdAt } = req.session as Express.Session

        if(now > createdAt + SESSION_ABSOLUTE_TIMEOUT) {
            await destroySession(req, res)

            return next(new Unauthorized('Session expired'))
        }
    }
    next()
})
