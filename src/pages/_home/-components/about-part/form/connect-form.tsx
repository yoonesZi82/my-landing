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

function ConnectForm() {
  const connectForm = useForm<z.infer<typeof connectSchema>>({
    resolver: zodResolver(connectSchema),
    defaultValues: {
      username: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  async function sendMessage(data: z.infer<typeof connectSchema>) {
    const apiKey = import.meta.env.VITE_VERIFY_PHONE_API_KEY
    const { phone } = data

    await toast.promise(
      axios.get(`https://api.veriphone.io/v2/verify`, {
        params: {
          key: apiKey,
          phone: `+${phone}`,
        },
      }),
      {
        loading: 'در حال بررسی شماره...',
        success: (res) => {
          if (res.data.status === 'success' && res.data.phone_valid) {
            connectForm.reset()
            return '✅ شماره معتبر است و پیام ارسال شد'
          } else {
            return 'شماره نامعتبر است'
          }
        },
        error: (err) => {
          return ' خطا در بررسی شماره'
        },
      },
    )
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
          name="phone"
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
            disabled={connectForm.formState.isSubmitting}
          >
            Send Message
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
