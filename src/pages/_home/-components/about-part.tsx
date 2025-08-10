import { useScroll } from 'motion/react'
import { Card } from '@/components/cards/card-scroll'
import { useRef } from 'react'

const projects = [
  {
    title: 'JavaScript',

    description:
      'I have been working with JavaScript for 4 years and have gained strong experience in implementing solutions and solving various challenges using the language. My expertise covers building dynamic, efficient, and scalable applications, as well as adapting to different project requirements and problem-solving scenarios.',
    colorDescription: '#000',
    src: 'js.png',
    color: '#F7DF1E',
  },
  {
    title: 'TypeScript',
    description:
      'TypeScript is a programming language that allows you to implement complex features on web pages.',
    src: 'ts.jpg',
    color: '#007ACC',
  },
  {
    title: 'React',
    description:
      'React is a JavaScript library for building user interfaces. It is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
    src: 'react.jpg',
    color: '#1b4f97',
  },
  {
    title: 'Next.js ',
    description:
      'Next.js is a powerful framework for building web applications. It is a React framework that allows you to build web applications with server-side rendering and static generation.',
    src: 'nextjs.jpg',
    color: '#151516',
  },
  {
    title: 'Node.js',
    description:
      'Node.js is a runtime environment for executing JavaScript code outside of a browser. It is a JavaScript runtime that allows you to build server-side applications with server-side rendering and static generation.',
    src: 'node.jpg',
    color: '#339933',
  },
  {
    title: 'Nest.js',
    description:
      'Nest.js is a framework for building server-side applications. It is a Node.js framework that allows you to build server-side applications with server-side rendering and static generation.',
    src: 'nest.png',
    color: '#E0234E',
  },
  {
    title: 'Tailwind CSS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    src: 'tailwind.png',
    color: '#38BDF8',
  },
  {
    title: 'And more...',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    src: 'me.jpg',
    color: '#1a1c20',
  },
]

export default function AboutPart() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  return (
    <main id="about-me" ref={container}>
      <>
        <section className="place-content-center grid w-full h-[40vh] lg:h-[60vh] text-white">
          <div className="bg-clip-text bg-gradient-to-b from-primary dark:from-white-title to-primary/80 dark:to-blue-title font-semibold text-transparent text-4xl lg:text-7xl text-center leading-[120%]">
            For read about my experience
            <br /> Scroll down! <span className="z-10 text-yellow-500">👇</span>
          </div>
        </section>
      </>

      <section className="w-full text-white">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return (
            <Card
              key={`p_${i}`}
              i={i}
              src={project?.src}
              title={project?.title}
              color={project?.color}
              description={project?.description}
              colorDescription={project?.colorDescription}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </section>
    </main>
  )
}
