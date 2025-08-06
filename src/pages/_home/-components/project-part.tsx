import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { motion, useInView } from 'framer-motion'
import ProjectCard from '@/components/cards/project-card'
import { useIsMobile } from '@/hooks/use-mobile'
import { MoveRight } from 'lucide-react'

function ProjectPart() {
  const isMobile = useIsMobile()
  const cardsRef = useRef(null)
  const isInView = useInView(cardsRef, { amount: isMobile ? 0.01 : 0.2 })

  return (
    <div className="flex flex-col gap-5 lg:gap-10 pt-20 lg:pt-30 w-full">
      <div className="flex justify-between items-center w-full">
        <p className="font-medium text-2xl">Projects</p>
        <Button size="lg" className="group rounded-xl" asChild>
          <Link to="/projects">
            See all
            <MoveRight className="transition-all group-hover:translate-x-1.5 duration-300" />
          </Link>
        </Button>
      </div>

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
    </div>
  )
}

export default ProjectPart
