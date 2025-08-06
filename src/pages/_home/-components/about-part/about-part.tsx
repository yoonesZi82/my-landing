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

function AboutPart() {
  const sectionRef = useRef(null)
  const isView = useInView(sectionRef, {})

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center gap-8 mt-20"
    >
      {isView ? (
        <>
          <h2 className="w-full lg:w-[60%] font-medium text-3xl lg:text-4xl text-center leading-[1.4]">
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
                  Connect with you
                </Button>
              </DialogTrigger>

              <DialogContent
                className={cn(
                  isOpen ? 'dialog-rotate-in' : 'dialog-rotate-out',
                )}
                showCloseButton={false}
              >
                <DialogHeader className="flex justify-center items-center">
                  <DialogTitle> Connect with me</DialogTitle>
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

export default AboutPart
