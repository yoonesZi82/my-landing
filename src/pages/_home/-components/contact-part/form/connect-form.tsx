import 'react-phone-input-2/lib/style.css'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import PhoneInput from 'react-phone-input-2'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import connectSchema from './schema/connect-schema'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { toast } from 'sonner'
import { LoaderCircle, Send } from 'lucide-react'
import { useState } from 'react'

function ConnectForm() {
  const [isLoading, setIsLoading] = useState(false)
  const connectForm = useForm<z.infer<typeof connectSchema>>({
    resolver: zodResolver(connectSchema),
    defaultValues: {
      username: '',
      mobile: '',
      email: '',
      message: '',
    },
  })

  async function sendMessage(data: z.infer<typeof connectSchema>) {
    setIsLoading(true)

    await axios
      .post('https://web-yoones-api.onrender.com/messages', {
        username: data.username,
        email: data.email,
        mobile: data.mobile,
        message: data.message,
      })
      .then(() => {
        connectForm.reset()
        toast.success('Message sent successfully')
      })
      .catch(() => {
        toast.error('Error in sending message')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Form {...connectForm}>
      <form
        className="flex flex-col gap-5"
        onSubmit={connectForm.handleSubmit(sendMessage)}
      >
        <FormField
          control={connectForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Username ..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={connectForm.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput
                  country={'us'}
                  value={field.value}
                  onChange={field.onChange}
                  inputClass="phone-number-input"
                  placeholder="Phone number ..."
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={connectForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email ..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={connectForm.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Your message ..."
                  className="min-h-[150px] resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-3 w-full">
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            Send Message
            {isLoading ? <LoaderCircle className="animate-spin" /> : <Send />}
          </Button>

          <DialogClose asChild>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              size="lg"
            >
              Close
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  )
}

export default ConnectForm
