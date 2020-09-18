import { Router } from 'express'
import { guest, catchAsync } from '../middleware/'
import { register } from '../controllers'

const router = Router()

router.post('/register', guest, catchAsync(register))

export { router as register }
