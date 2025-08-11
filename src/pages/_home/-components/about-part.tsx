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
      'I  have over two years of experience working with TypeScript, during which I have developed various applications across different domains. This experience has enhanced my ability to build type-safe, efficient, and well-structured projects, leveraging TypeScript’s powerful features to deliver high-quality software.',
    src: 'ts.jpg',
    color: '#007ACC',
  },
  {
    title: 'React',
    description:
      'I have over three years of experience working with React, during which I have developed a wide range of interactive and responsive web applications. This experience has strengthened my skills in building scalable, maintainable, and user-friendly interfaces, leveraging React’s component-based architecture and ecosystem to deliver high-quality solutions.',
    src: 'react.jpg',
    color: '#1b4f97',
  },
  {
    title: 'Next.js ',
    description:
      'I have over three years of experience working with Next.js, during which I have developed performant, SEO-friendly, and scalable web applications. This experience has strengthened my ability to create full-stack solutions, leveraging Next.js features such as server-side rendering, static site generation, and API routes to deliver high-quality, production-ready applications.',
    src: 'nextjs.jpg',
    color: '#151516',
  },
  {
    title: 'Node.js',
    description:
      'I have over one years of experience working with Node.js, during which I have built scalable, efficient, and secure backend services and APIs. This experience has enhanced my skills in designing robust server-side architectures, integrating databases, and optimizing application performance, leveraging Node.js’s event-driven, non-blocking model to deliver high-quality backend solutions.',
    src: 'node.jpg',
    color: '#339933',
  },
  {
    title: 'Nest.js',
    description:
      'I have over two years of experience working with Nest.js, during which I have developed scalable, maintainable, and well-structured backend applications. This experience has strengthened my skills in building modular architectures, implementing RESTful and GraphQL APIs, and integrating various databases, leveraging Nest.js’s powerful TypeScript-based framework to deliver high-quality server-side solutions.',
    src: 'nest.png',
    color: '#E0234E',
  },
  {
    title: 'Tailwind CSS',
    description:
      'I have over three years of experience working with Tailwind CSS, using it to build responsive, modern, and visually appealing user interfaces. My experience includes creating custom designs efficiently by leveraging Tailwind’s utility-first approach, which allows rapid styling and consistent design across projects. This has helped me deliver clean and maintainable UI code in various web applications.',
    src: 'tailwind.png',
    color: '#38BDF8',
  },
  {
    title: 'And Me...',
    description:
      'My name is Yoones, born in 2003. I am a computer engineer specializing in software engineering. I have been working in the frontend field for 4 years and I am an expert in this area. Using the technologies I know, I can implement various and diverse designs with different, user-friendly UI/UX. For the past year, I have also started working in the backend field. Using Express and Nest.js, I can develop solid backend solutions for different projects. You can fully entrust your project to me because I am a full-stack developer.',
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
