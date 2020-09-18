import { Request, Response, NextFunction } from 'express'
import { isLoggedIn } from '../services'
import {BadRequest} from "../errors";

export const guest = (req: Request, res: Response, next: NextFunction) => {
    if(isLoggedIn(req)) {
        return next(new  BadRequest('You are already logged in'))
    }
}
