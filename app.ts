import * as express from 'express'

import * as session from 'express-session'
import { Store } from 'express-session'

const cors = require('cors')

import { SESSION_OPTIONS } from './config'
import { home, register, pick } from './routes'
// import { notFound, serverError, active } from './middleware'

export const createApp = (store: Store) => {
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }));

    app.use(cors())

    app.use(session({ ...SESSION_OPTIONS, store }))

    // app.use(active)

    app.use(home)

    // app.use(login)

    app.use('/api/register', register)

    // app.use(verify)

    // app.use(reset)

    // app.use(notFound)

    // app.use(serverError)

    return app
}
