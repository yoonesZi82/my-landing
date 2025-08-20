import { z } from 'zod'

const connectSchema = z.object({
  username: z
    .string({ error: 'Username is required' })
    .min(1, 'Username is required'),
  mobile: z
    .string({ error: 'Username is required' })
    .min(1, 'Mobile number is required')
    .regex(
      /^(\+?\d{1,4}|0)?9\d{9}$|^\+?[1-9]\d{7,14}$/g,
      'Mobile number is not valid',
    ),
  email: z.string({ error: 'Email is required' }).email('Email is not valid'),
  message: z
    .string({ error: 'message is required' })
    .min(1, 'message is required'),
})

export default connectSchema
