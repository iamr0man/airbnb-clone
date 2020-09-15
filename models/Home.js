const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredNumber = {
    type: Number,
    required: true,
};

const requiredString = {
    type: String,
    required: true,
};

// Create Schema
const HomeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    location: {
        country: {
            ...requiredString
        },
        address: {
            ...requiredString
        },
        latitude: {
            ...requiredNumber,
            min: -90,
            max: 90,
        },
        longitude: {
            ...requiredNumber,
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
                    ref: 'users'
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
            ...requiredNumber
        },
        bedRooms: {
            ...requiredNumber
        },
        amountOfBeds: {
            ...requiredNumber
        },
        bathRooms: {
            ...requiredNumber
        }
    },
    textDetails: {
        general: {
            ...requiredString
        },
        house: {
            ...requiredString
        },
        importantInfo: {
            ...requiredString
        },
        availableForGuest: {
            ...requiredString
        }
    },
    pricePerNight: {
        ...requiredNumber
    },
    bookedDate: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            value: {
                type: Array,
                required: true
            }
        }
    ],
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = Home = mongoose.model('home', HomeSchema);
