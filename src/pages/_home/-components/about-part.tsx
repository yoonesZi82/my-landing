import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function AboutPart() {
  const sectionRef = useRef(null)
  const isView = useInView(sectionRef, {})

  return (
    <div
      ref={sectionRef}
      className="flex lg:flex-row flex-col-reverse justify-between items-center gap-8 mt-20 w-full overflow-hidden"
    >
      {isView ? (
        <>
          <div className="flex flex-col gap-4 w-full">
            <motion.h2
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
              className="font-medium lg:text-[30px] text-3xl text-center lg:text-start"
            >
              Hi, I'm Younes, a fullstack developer born in 2003.
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-medium lg:text-[20px] text-lg text-center lg:text-start"
            >
              If you want to get to know me better, just click the button below,
              my friend!
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex justify-center lg:justify-start"
            >
              <Button className="w-fit" size="lg" asChild>
                <Link to="/about-me">About me </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: 400, rotate: 20 }}
            animate={{ opacity: 1, translateX: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-end rounded-xl w-full overflow-hidden"
          >
            <img
              src="/images/photo4.jpeg"
              alt="about"
              className="rounded-xl w-full lg:w-[70%] max-h-[600px] object-cover"
            />
          </motion.div>
        </>
      ) : null}
    </div>
  )
}

export default AboutPart
