import { Schema, model, Document, Model } from 'mongoose'

export interface RequestDocument extends Document {
    host_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    home: {
        name: String,
        city: String
    }
    guest_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    status: String,
    date: Array<Number>,
    guests: String,
    money: Number,
    isCounted: Boolean,
    regDate: Date
}

interface RequestModel extends Model<RequestDocument> {}

const RequestSchema = new Schema({
    host_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    home: {
        name: String,
        city: String
    },
    guest_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    status: String,
    date: [Number],
    guests: String,
    money: Number,
    isCounted: Boolean,
    regDate: {
        type: Date,
        default: Date.now
    }
});

export const Request = model<RequestDocument, RequestModel>('request', RequestSchema)
