const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    information: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reviews: [
        {
            fromGuests: [
                {
                    user: {
                        type: Schema.Types.ObjectId,
                        ref: 'users'
                    },
                    review: {
                        type: String,
                        required: true
                    }
                }
            ],
            fromHost: [
                {
                    user: {
                        type: Schema.Types.ObjectId,
                        ref: 'users'
                    },
                    review: {
                        type: String,
                        required: true
                    }
                }
            ],
        }
    ],
    isConfirmed: {
        type: Boolean,
        default: false
    },
    regDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema)
