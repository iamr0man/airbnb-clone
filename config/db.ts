import { ConnectionOptions } from 'mongoose'

// const {
//   MONGO_USERNAME = 'admin',
//   MONGO_PASSWORD = 'secret',
//   MONGO_HOST = 'localhost',
//   MONGO_PORT = 27017,
//   MONGO_DATABASE = 'auth'
// } = process.env

export const MONGO_URI = `` // your link

export const MONGO_OPTIONS: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
