import { validate, registerSchema } from '../validation'
import { User } from '../models/user'
import { BadRequest } from '../errors'
import { logIn, sendMail } from '../services'

export const register = async (req, res) => {
  await validate(registerSchema, req.body)

  const { name, email, password } = req.body;

  const found = await User.exists({ email })

  if(found) {
    throw new BadRequest('User already exist')
  }

  const user = await User.create({ email, name, password })

  logIn(req, user.id)

  const link = user.verificationUrl()

  await sendMail({
    to: email,
    subject: "Verify your email address",
    text: link
  })

  res.json({ message: 'Success'})

}