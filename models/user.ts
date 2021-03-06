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
    information: String,
    earnedAllTime: Number,
    confirmedNights: Number,
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
    verifiedAt: Date,
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
        information: String,
        earnedAllTime: Number,
        confirmedNights: Number,
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
        verifiedAt: Date
    },
    {
        timestamps: true
    }
);

userSchema.pre<UserDocument>('save',async function () {
    if(this.isModified('password')) {
        // @ts-ignore
        this.password = await hash(this.password, BCRYPT_WORK_FACTOR)
    }
})

userSchema.methods.matchesPassword = function (password) {
    return compare(this.password, password)
}

userSchema.methods.verificationUrl = function () {
    const token = createHash('sha1').update(this.email).digest('hex')
    const expires = Date.now() + EMAIL_VERIFICATION_TIMEOUT

    const url = `${APP_ORIGIN}/email/verify?id=${this.id}&token=${token}&expires=${expires}`
    const signature = User.signVerificationUrl(url)

    return `${url}&signature=${signature}`
}

userSchema.statics.signVerificationUrl = (url: string) =>
    createHmac('sha256', APP_SECRET).update(url).digest('hex')


userSchema.set('toJSON', {
    transform: (doc, { __v, password, ...rest }, options) => rest
})

export const User = model<UserDocument, UserModel>('user', userSchema)
