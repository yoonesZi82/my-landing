import { createFileRoute } from '@tanstack/react-router'
import HeroText from './-components/hero-text'
import ShowIcon from './-components/show-icon'
import ScrollDown from './-components/scroll-down'
import ProjectPart from './-components/project-part'
import { useRef } from 'react'
import AboutPart from './-components/about-part/about-part'

export const Route = createFileRoute('/_home/')({
  component: Home,
})

function Home() {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <div className="flex flex-col gap-10">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 w-full">
          <HeroText />
          <ShowIcon />
        </div>
      </div>
      <div className="bg-black/10 rounded-[28%_28%_25%_25%/3%_3%_0%_0%] lg:rounded-[25%_25%_25%_25%/5%_5%_0%_0%] w-full">
        <ScrollDown setRef={(el: HTMLDivElement) => (ref.current = el)} />
        <div
          id="project"
          className="flex flex-col gap-10 py-20 container"
          ref={ref}
        >
          <ProjectPart />
          <AboutPart />
        </div>
      </div>
    </div>
  )
}
