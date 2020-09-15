const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true
}

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
      ]
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

module.exports = Pick = mongoose.model('pick', PickSchema)
