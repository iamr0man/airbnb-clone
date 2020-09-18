import mongoose from 'mongoose'
import * as Joi from 'joi'
import { ExtensionFactory, Root, StringSchema, ObjectSchema } from 'joi'
import { BadRequest } from '../errors'

// Override validation of objectId
const objectId: ExtensionFactory = Joi => ({
    type: 'objectId',
    base: Joi.string(),
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
export const CustomJoi: ExtendRoot = Joi.extend(objectId)

export const validate = async (schema: ObjectSchema, payload: any) => {
    try{
        await schema.validateAsync(payload, { abortEarly: false })
    } catch(e) {
        throw new BadRequest()
    }
}
