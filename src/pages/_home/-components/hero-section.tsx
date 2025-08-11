import { Sparkles } from '@/components/ui/sparkles'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

function HeroSection() {
  const { theme } = useTheme()

  return (
    <main className="w-full overflow-hidden">
      <section className="relative w-full h-full lg:h-[90vh] overflow-hidden">
        <div className="top-0 right-0 bottom-0 left-0 absolute bg-[linear-gradient(to_right,#7a7a7a2c_1px,transparent_1px),linear-gradient(to_bottom,#7a7a7a2c_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <article className="z-10 relative gap-4 grid py-28 text-center container">
          <span className="inline-block bg-primary mx-auto p-1 px-3 border border-blue-border rounded-full w-fit text-primary-foreground text-sm xl:text-base">
            Full stack developer
          </span>
          <h1 className="bg-clip-text bg-gradient-to-b from-primary dark:from-white-title to-primary/80 dark:to-blue-title font-semibold text-transparent text-3xl xl:text-5xl 2xl:text-6xl leading-[100%] tracking-tighter">
            Turning Ideas into Code <br /> with Precision and Passion
          </h1>
          <span>
            I'm Younes, a 2003-born Full-Stack Developer crafting modern web
            solutions. <br />
            From frontend finesse to backend power I bring ideas to life.
            <br />
            Explore my work and let’s connect!
          </span>

          <div className="flex justify-center items-center gap-4 mt-8 lg:mt-0">
            <Button size="lg" className="px-10 rounded-xl" asChild>
              <a href="#projects">Projects</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="z-[3] px-10 rounded-xl"
              asChild
            >
              <a href="#text-me">Text to me</a>
            </Button>
          </div>
        </article>

        <div className="bottom-0 z-[2] absolute before:absolute after:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 w-screen h-[400px] overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)]">
          <Sparkles
            density={1800}
            speed={1.2}
            color={theme === 'dark' ? '#48b6ff' : '#0f1c35'}
            direction="top"
            className="bottom-0 absolute inset-x-0 w-full h-full"
          />
        </div>
      </section>
    </main>
  )
}

export default HeroSection
