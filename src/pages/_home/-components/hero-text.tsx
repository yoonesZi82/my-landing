import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function HeroText() {
  const [showFeatures, setShowFeatures] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [titleText, setTitleText] = useState('')
  const fullTitle = 'You have a idea ? just say to me'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitleText((prev) => prev + fullTitle[index])
      index++
      if (index === fullTitle.length) {
        clearInterval(interval)
        setTimeout(() => setShowFeatures(true), 500)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const firstSentence = 'im use this technology'
  const typeSpeed = 70
  const delayAfterTyping = 1000
  const totalTime = firstSentence.length * typeSpeed + delayAfterTyping

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true)
    }, totalTime)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col gap-4 w-full lg:w-[40%]">
      <h1 className="font-bold text-black dark:text-primary-foreground text-3xl lg:text-5xl text-center lg:text-start">
        {titleText}
      </h1>
      {showFeatures && (
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2">
          <span className="text-xl lg:text-2xl">
            <Typewriter
              words={[firstSentence]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={typeSpeed}
              deleteSpeed={50}
              delaySpeed={delayAfterTyping}
            />
          </span>
          {showSecond ? (
            <span className="text-primary text-xl lg:text-2xl">
              <Typewriter
                words={['Next.js', 'NestJS', 'React']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          ) : null}
        </div>
      )}
      <div className="flex justify-center items-center gap-4 mt-5 w-full">
        <Button className="rounded-xl w-1/2" size="lg" asChild>
          <a href="#project">See Projects</a>
        </Button>
        <Button
          className="!border-primary rounded-xl w-1/2 !text-primary"
          variant="outline"
          size="lg"
          asChild
        >
          <a href="#">Text to me</a>
        </Button>
      </div>
    </div>
  )
}
