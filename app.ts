import * as express from 'express'

import * as session from 'express-session'
import { Store } from 'express-session'

const cors = require('cors')

import { SESSION_OPTIONS } from './config'
import { register, login, me, home, pick, request } from './routes'
import { active } from './middleware'

export const createApp = (store: Store) => {
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }));

    app.use(session({ ...SESSION_OPTIONS, store }))

    app.use(cors({
        credentials: true,
        origin: 'http://localhost:8081'
    }))

    app.use(active)

    app.use('/api/me/', me)


    app.use('/api/', login)

    app.use('/api/register', register)

    app.use('/api/home/', home)

    app.use('/api/pick/', pick)

    app.use('/api/request/', request)

    // app.use(verify)

    // app.use(reset)

    // app.use(notFound)

    // app.use(serverError)

    return app
}
