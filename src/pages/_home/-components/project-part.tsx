import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useIsMobile } from '@/hooks/use-mobile'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'
import type { ProjectType } from '@/components/cards/types/project.type'
import { cn } from '@/lib/utils'
import Project from '@/components/cards/project'
import { Skeleton } from '@/components/ui/skeleton'

// const PAGE_SIZE = 6

// async function fetchProjects({ pageParam = 1 }): Promise<ProjectType[]> {
//   const { data } = await axios.get(
//     `https://wep-yoones-api-production.up.railway.app/projects`,
//     { params: { page: pageParam, limit: PAGE_SIZE } },
//   )
//   return data.data
// }

async function ProjectPart() {
  // const isMobile = useIsMobile()
  // const cardsRef = useRef(null)
  // const isInView = useInView(cardsRef, {
  //   amount: isMobile ? 0.01 : 0.2,
  //   once: isMobile ? true : false,
  // })

  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isLoading,
  //   isError,
  // } = useInfiniteQuery({
  //   queryKey: ['projects'],
  //   queryFn: fetchProjects,
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage, allPages) => {
  //     if (lastPage.length < PAGE_SIZE) return undefined
  //     return allPages.length + 1
  //   },
  // })

  // const allProjects = data?.pages ? data.pages.flatMap((page) => page) : []

  return (
    <div className="place-content-center place-items-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* {isLoading ||
        (allProjects.length === 0 && (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="flex flex-col space-y-3">
                <Skeleton className="rounded-xl w-[250px] h-[125px]" />
                <div className="space-y-2">
                  <Skeleton className="w-[250px] h-4" />
                  <Skeleton className="w-[200px] h-4" />
                </div>
              </div>
            ))}
          </>
        ))}
      {allProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))} */}
      <p>1</p>
    </div>
    // <div
    //   id="projects"
    //   className="flex flex-col gap-5 lg:gap-10 pt-20 lg:pt-30 w-full h-screen"
    // >
    //   <div className="relative flex justify-center items-center my-4 overflow-hidden">
    //     <Separator />
    //     <div className="px-2 font-medium text-3xl lg:text-4xl text-center">
    //       Projects
    //     </div>
    //     <Separator />
    //   </div>

    //   {/* <div className="flex flex-col justify-center items-center gap-8 w-full">
    //     <div
    //       ref={cardsRef}
    //       className={cn(
    //         'w-full',
    //         allProjects
    //           ? 'place-content-center place-items-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    //           : 'flex justify-center items-center',
    //       )}
    //     >
    //       {isLoading ? (
    //         <div>Loading...</div>
    //       ) : isError ? (
    //         <div>Error loading projects</div>
    //       ) : allProjects && allProjects.length > 0 ? (
    //         allProjects.map((project, index) => (
    //           // <motion.div
    //           //   key={project.id}
    //           //   initial={{ opacity: 0, y: 50 }}
    //           //   whileInView={{ opacity: 1, y: 0 }}
    //           //   viewport={{ once: true, amount: 0.2 }}
    //           //   transition={{
    //           //     duration: 0.5,
    //           //     delay: index * 0.1,
    //           //     ease: 'easeOut',
    //           //   }}
    //           //   className="w-full h-full"
    //           // >
    //           // </motion.div>
    //           <div>
    //             <ProjectCard project={project} />
    //           </div>
    //         ))
    //       ) : (
    //         <div>No projects found</div>
    //       )}
    //     </div>

    //     {hasNextPage && (
    //       <Button
    //         size="lg"
    //         className="flex items-center gap-2 bg-primary/50 px-10 rounded-xl"
    //         onClick={() => fetchNextPage()}
    //         disabled={isFetchingNextPage}
    //       >
    //         {isFetchingNextPage ? 'Loading...' : 'Load More'}
    //         <motion.div
    //           initial={{ rotate: 0 }}
    //           animate={{ rotate: 360 }}
    //           transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    //         >
    //           <RefreshCcw />
    //         </motion.div>
    //       </Button>
    //     )}
    //   </div> */}
    // </div>
  )
}

export default ProjectPart
