import mongoose from 'mongoose'
import joi, { ExtensionFactory, Root, StringSchema, ObjectSchema } from '@hapi/joi'
import { BadRequest } from '../errors'

// Override validation of objectId
const objectId: ExtensionFactory = joi => ({
    type: 'objectId',
    base: joi.string(),
    messages: {
        objectId: '"{#label}" is not a valid ID'
    },
    validate (value, helpers) {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            return { value, errors: helpers.error('objectId') }
        }
    }
})

interface ExtendRoot extends Root {
    objectId(): StringSchema
}

// create new instance
export const Joi: ExtendRoot = joi.extend(objectId)

export const validate = async (schema: ObjectSchema, payload: any) => {
    try{
        await schema.validateAsync(payload, { abortEarly: false })
    } catch(e) {
        throw new BadRequest()
    }
}
