import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Typewriter } from 'react-simple-typewriter'
import { motion, useInView } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import ConnectForm from './form/connect-form'

function ContactPart() {
  const sectionRef = useRef(null)
  const isView = useInView(sectionRef, {})

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      id="text-me"
      ref={sectionRef}
      className="flex flex-col justify-center items-center gap-8 scroll-mt-20 lg:scroll-mt-40"
    >
      {isView ? (
        <>
          <h2 className="w-full lg:w-[60%] font-medium text-[22px] lg:text-4xl text-center leading-[1.4]">
            <Typewriter
              words={[
                'Want to get in touch or request something custom? Just fill out the form I’d love to hear from you!',
              ]}
              loop={1}
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000000}
              cursorStyle="|"
            />
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 360 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="p-6 rounded-xl" size="lg">
                  Text to me
                </Button>
              </DialogTrigger>

              <DialogContent
                className={cn(
                  isOpen ? 'dialog-rotate-in' : 'dialog-rotate-out',
                )}
                showCloseButton={false}
              >
                <DialogHeader className="flex justify-center items-center">
                  <DialogTitle> Tanks for send message with me</DialogTitle>
                  <DialogDescription className="hidden" />
                </DialogHeader>
                <ConnectForm />
              </DialogContent>
            </Dialog>
          </motion.div>
        </>
      ) : null}
    </div>
  )
}

export default ContactPart
