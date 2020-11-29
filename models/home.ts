import { Schema, model, Document, Model } from 'mongoose'

interface HomeDocument extends Document {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    location: {
        city: String,
        address: String,
        latitude: {
            type: Number,
            min: -90,
            max: 90,
        },
        longitude: {
            type: Number,
            min: -180,
            max: 180,
        },
    },
    photos: {
        type: Array<string>,
        required: true
    },
    reviews: {
        stars: {
            type: Number,
            default: 0.0,
        },
        array: [
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
        ]
    },
    apartmentType: {
        type: String,
        required: true
    },
    apartmentRoomsDetails: {
        maxGuests: {
            type: Number
        },
        bedRooms: {
            type: Number
        },
        amountOfBeds: {
            type: Number
        },
        bathRooms: {
            type: Number
        }
    },
    textDetails: {
        general: String,
        house: String,
        importantInfo: String,
        availableForGuest:String
    },
    pricePerNight: {
        type: Number
    },
    bookedDate: [
        {
            type: Array<number>
        }
    ],
    createdDate:Date,
}

interface HomeModel extends Model<HomeDocument> {}

// Create Schema
const HomeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    location: {
        city:String,
        address:String,
        latitude: {
            type: Number,
            min: -90,
            max: 90,
        },
        longitude: {
            type: Number,
            min: -180,
            max: 180,
        },
    },
    photos: {
      type: [String],
      required: true
    },
    reviews: {
        stars: {
            type: Number,
            default: 0.0,
        },
        array: [
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
        ]
    },
    apartmentType: {
        type: String,
        required: true
    },
    apartmentRoomsDetails: {
        maxGuests: {
            type: Number
        },
        bedRooms: {
            type: Number
        },
        amountOfBeds: {
            type: Number
        },
        bathRooms: {
            type: Number
        }
    },
    textDetails: {
        general: String,
        house: String,
        importantInfo: String,
        availableForGuest:String
    },
    pricePerNight: {
        type: Number
    },
    bookedDate: {
        type: [Number]
    }
    ,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

export const Home = model<HomeDocument, HomeModel>('home', HomeSchema);
