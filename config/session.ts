import { SessionOptions } from 'express-session'
import { IN_PROD } from './app'

const ONE_HOUR = 1000 * 60 * 60

const THIRTY_MINUTES = ONE_HOUR / 2

const SIX_HOURS = ONE_HOUR * 6

const { env } = process

export const {
    SESSION_SECRET = 'please keep this secret, mate',
    SESSION_NAME = 'session_id',
    SESSION_IDLE_TIMEOUT = THIRTY_MINUTES
} = env

export const SESSION_ABSOLUTE_TIMEOUT = +(env.SESSION_ABSOLUTE_TIMEOUT || SIX_HOURS)

export const SESSION_OPTIONS: SessionOptions = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: +SESSION_IDLE_TIMEOUT,
        secure: IN_PROD,
        sameSite: true,
        httpOnly: false
    },
    rolling: true,
}
