import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from '@/components/cards/project-card'
import { useIsMobile } from '@/hooks/use-mobile'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'

function ProjectPart() {
  const isMobile = useIsMobile()
  const cardsRef = useRef(null)
  const isInView = useInView(cardsRef, {
    amount: isMobile ? 0.01 : 0.2,
    once: isMobile ? true : false,
  })

  return (
    <div
      id="projects"
      className="flex flex-col gap-5 lg:gap-10 pt-20 lg:pt-30 w-full"
    >
      <div className="relative flex justify-center items-center my-4 overflow-hidden">
        <Separator />
        <div className="px-2 font-medium text-3xl lg:text-4xl text-center">
          Projects
        </div>
        <Separator />
      </div>

      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div
          ref={cardsRef}
          className="place-content-center place-items-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              className="w-full h-full"
            >
              <ProjectCard id={index + 1} />
            </motion.div>
          ))}
        </div>
        <Button size="lg" className="bg-primary/50 px-10 rounded-xl">
          Load More
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <RefreshCcw />
          </motion.div>
        </Button>
      </div>
    </div>
  )
}

export default ProjectPart
