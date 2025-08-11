import { motion, useInView, useTransform } from 'framer-motion'
import { MotionValue } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { Separator } from '../ui/separator'
import { Typewriter } from 'react-simple-typewriter'

interface CardProps {
  i: number
  title: string
  colorDescription?: string
  description: ReactNode | string
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
      className="top-0 sticky flex justify-center items-center mb-32 lg:mb-28 h-screen"
    >
      <motion.div
        ref={boxText}
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] overflow-hidden min-h-[600px] max-h-[900px] w-full lg:w-[80%] rounded-xl p-10 origin-top`}
      >
        <h2
          className="font-semibold text-2xl text-center"
          style={{ color: colorDescription }}
        >
          {title}
        </h2>
        <div className="flex xl:flex-row flex-col-reverse items-center gap-4 lg:gap-10 mt-5 h-full">
          <div className="relative flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 w-full xl:w-[40%]">
            <p
              className="text-lg text-center xl:text-start"
              style={{ color: colorDescription }}
            >
              {isInView && (
                <Typewriter
                  words={[description as string]}
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
              className="rounded-2xl w-full h-full max-h-[200px] md:max-h-[350px] lg:max-h-[600px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
