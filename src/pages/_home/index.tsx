import { createFileRoute } from '@tanstack/react-router'
import ScrollDown from './-components/scroll-down'
import ProjectPart from './-components/project-part'
import { useRef } from 'react'
import ContactPart from './-components/contact-part/contact-part'
import AboutPart from './-components/about-part'
import HeroSection from './-components/hero-section'
import LibrarySlider from './-components/library-slider'
import ReactLenis from 'lenis/react'

export const Route = createFileRoute('/_home/')({
  component: Home,
})

function Home() {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <ReactLenis root>
      <div className="flex flex-col gap-10">
        <HeroSection />
        <div className="bg-black/5 lg:bg-black/5 lg:dark:bg-black/5 dark:bg-white/5 rounded-[25%_25%_25%_25%/1%_1%_0%_0%] w-full">
          <ScrollDown setRef={(el: HTMLDivElement) => (ref.current = el)} />
          <div
            id="project"
            className="flex flex-col gap-10 pt-20 container"
            ref={ref}
          >
            <ProjectPart />
            <AboutPart />
            <ContactPart />
            <LibrarySlider />
          </div>
        </div>
      </div>
    </ReactLenis>
  )
}
