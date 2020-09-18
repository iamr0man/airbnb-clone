import { Request, Response } from "express";

export const isLoggedIn = (req: Request) => !!req.session!.userId

export const logIn = (req: Request, userId) => {
    req.session!.userId = userId
}
