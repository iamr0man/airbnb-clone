import * as mongoose from 'mongoose'
import * as session from 'express-session'
import * as connectRedis from 'connect-redis'
import * as Redis from 'ioredis'
import { MONGO_URI, MONGO_OPTIONS, REDIS_OPTIONS, APP_PORT } from './config'
import { createApp } from './app'

;(async () => {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)

    const RedisStore = connectRedis(session)

    const client = new Redis(REDIS_OPTIONS)

    const store = new RedisStore({ client })

    const app = createApp(store)

    app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
})()
