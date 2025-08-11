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
import { Mail } from 'lucide-react'

function ContactPart() {
  const sectionRef = useRef(null)
  const isView = useInView(sectionRef, { once: true })

  const [isOpen, setIsOpen] = useState(false)
  const [isLoopEnd, setIsLoopEnd] = useState(false)

  return (
    <div
      id="text-me"
      ref={sectionRef}
      className="flex flex-col justify-center items-center gap-8 scroll-mt-20 lg:scroll-mt-40"
    >
      {isView ? (
        <>
          <div className="bg-clip-text bg-gradient-to-b from-primary dark:from-white-title to-primary/80 dark:to-blue-title font-semibold text-transparent text-2xl lg:text-4xl text-center leading-[120%]">
            <Typewriter
              words={['Want to get in touch or request something custom?']}
              loop={1}
              onType={() => setTimeout(() => setIsLoopEnd(true), 1000)}
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
            <br />
            {isLoopEnd && (
              <Typewriter
                words={['Just fill out the form I’d love to hear from you!']}
                loop={1}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000000}
              />
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 360 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="px-8 rounded-xl" size="lg">
                  Text to me
                  <Mail />
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
