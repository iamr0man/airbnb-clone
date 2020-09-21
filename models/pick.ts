import { Schema, model, Document, Model } from 'mongoose'

const requiredString = {
  type: String,
  required: true
}

export interface PickDocument extends Document {
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    discover: {
        backgroundUrl: string,
        name: string,
        country: string,
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'home'
            }
        ]
    },
    city: {
        backgroundUrl: string,
        name: string,
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'home'
            }
        ],
        isPlus: {
            type: Boolean,
            default: true
        }
    },
    museum: {
        backgroundUrl: string,
        name: {
            type: Array<String>,
            required: true
        },
        textInformation: {
            type: Array<String>,
            required: true
        }
    },
    regDate: Date
}

interface PickModel extends Model<PickDocument> {}

const PickSchema = new Schema({
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    discover: {
      backgroundUrl: requiredString,
      name: requiredString,
      country: requiredString,
      items: [
          {
              type: Schema.Types.ObjectId,
              ref: 'home'
          }
      ]
    },
    city: {
      backgroundUrl: requiredString,
      name: requiredString,
      items: [
          {
              type: Schema.Types.ObjectId,
              ref: 'home'
          }
      ],
      isPlus: {
          type: Boolean,
          default: true
      }
    },
    museum: {
      backgroundUrl: requiredString,
      name: {
        type: [String],
        required: true
      },
      textInformation: {
        type: [String],
        required: true
      }
    },
    regDate: {
      type: Date,
      default: Date.now
    }
});

export const Pick = model<PickDocument, PickModel>('pick', PickSchema)
