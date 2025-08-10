import { motion, useInView, useTransform } from 'framer-motion'
import { MotionValue } from 'motion/react'
import { useRef } from 'react'
import { Separator } from '../ui/separator'
import { Typewriter } from 'react-simple-typewriter'

interface CardProps {
  i: number
  title: string
  colorDescription?: string
  description: string
  descriptionMe?: string
  src: string
  color: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  colorDescription = '#fff',
  description,
  descriptionMe,
  src,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null)
  const boxText = useRef(null)
  const scale = useTransform(progress, range, [1, targetScale])
  const isInView = useInView(boxText, { once: true })

  return (
    <div
      ref={container}
      className="top-0 sticky flex justify-center items-center h-screen"
    >
      <motion.div
        ref={boxText}
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] overflow-hidden h-[600px] max-h-[600px] w-full lg:w-[80%] rounded-xl p-10 origin-top`}
      >
        <h2
          className="font-semibold text-2xl text-center"
          style={{ color: colorDescription }}
        >
          {title}
        </h2>
        <div
          className={`flex flex-col-reverse items-center lg:flex-row h-full mt-5 gap-4 lg:gap-10`}
        >
          <div
            className={`lg:w-[40%] gap-2 flex flex-col justify-center items-center lg:justify-start lg:items-start w-full relative  `}
          >
            <p
              className="text-lg text-center lg:text-justify"
              style={{ color: colorDescription }}
            >
              {isInView && (
                <Typewriter
                  words={[description]}
                  loop={1}
                  cursor={false}
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={1000000}
                />
              )}
            </p>
            {descriptionMe && <Separator className="my-2" />}
            <p
              className="text-center lg:text-start"
              style={{ color: colorDescription }}
            >
              {descriptionMe}
            </p>
          </div>

          <div
            className={`relative lg:w-[60%] w-full h-full rounded-lg overflow-hidden flex justify-center items-center`}
          >
            <img
              src={`/images/${src}`}
              alt="image"
              className="rounded-2xl w-full h-full max-h-[400px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
