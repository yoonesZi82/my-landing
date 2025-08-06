import { Button } from '@/components/ui/button'
import { ChevronsDown } from 'lucide-react'
import { motion } from 'framer-motion'

type ScrollDownProps = {
  setRef: (el: HTMLDivElement) => void
}

function ScrollDown({ setRef }: ScrollDownProps) {
  const goToPart = () => {
    const target = document.querySelector('#project') as HTMLDivElement
    if (target) {
      setRef(target)
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="flex justify-center items-center w-full">
      <Button
        size="icon"
        className="bg-black/10 shadow-none rounded-t-none !rounded-b-full"
        onClick={goToPart}
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronsDown />
        </motion.div>
      </Button>
    </div>
  )
}

export default ScrollDown
