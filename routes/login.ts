import { Router } from 'express'
import {auth, guest, catchAsync} from "../middleware";
import { logIn, logOut } from '../controllers'

const router = Router()

router.post('/login', guest, catchAsync(logIn))

router.post('/logout', auth, catchAsync(logOut))

export { router as login}