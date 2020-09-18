import { Schema, model, Document, Model } from 'mongoose'
import { hash, compare } from 'bcryptjs'
import { createHash, createHmac, timingSafeEqual } from 'crypto'
import { BCRYPT_WORK_FACTOR, APP_SECRET, EMAIL_VERIFICATION_TIMEOUT, APP_ORIGIN } from '../config'

export interface UserDocument extends Document {
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
                        ref: 'user'
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
                        ref: 'user'
                    },
                    review: {
                        type: String,
                        required: true
                    }
                }
            ],
        }
    ],
    verifiedAt: {
        type: Boolean,
        default: false
    },
    matchesPassword: (password: string) => Promise<boolean>,
    verificationUrl: () => string
}

interface UserModel extends Model<UserDocument>{
    signVerificationUrl: (url: string) => string,
    hasValidVerificationUrl: (path: string, query: any) => boolean
}

const userSchema = new Schema(
    {
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
                            ref: 'user'
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
                            ref: 'user'
                        },
                        review: {
                            type: String,
                            required: true
                        }
                    }
                ],
            }
        ],
        verifiedAt: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

userSchema.set('toJSON', {
    transform: (doc, { __v, password, ...rest }, options) => rest
})

export const User = model<UserDocument, UserModel>('user', userSchema)
