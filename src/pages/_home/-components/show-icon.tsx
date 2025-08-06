import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import NestJs from '@/components/icons/NestJs'
import NextJs from '@/components/icons/NextJs'

const icons = [NextJs, NestJs]

const rotateVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateY: -90,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // easeOut standard
  },
  exit: {
    opacity: 0,
    rotateY: 90,
    scale: 0.8,
    transition: { duration: 0.8, ease: [0.42, 0, 1, 1] }, // easeIn standard
  },
}

function ShowIcon() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const IconComponent = icons[index]
  return (
    <div className="flex justify-center items-center bg-primary p-20 rounded-[30%_70%_50%_50%/20%_27%_73%_71%] w-full max-w-[400px] min-h-[400px] perspective-1000">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={rotateVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ transformStyle: 'preserve-3d' }}
          className="[&_svg]:size-40 lg:[&_svg]:size-52"
        >
          <IconComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ShowIcon
