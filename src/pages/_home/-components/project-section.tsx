import type { ProjectType } from '@/components/cards/types/project.type'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import Project from '@/components/cards/project'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import ProjectSkeleton from '@/components/cards/project-skeleton'
import { Separator } from '@/components/ui/separator'

const PAGE_SIZE = 1

async function fetchProjects({ pageParam = 1 }): Promise<ProjectType[]> {
  const { data } = await axios.get(
    `https://web-yoones-api.onrender.com/projects`,
    { params: { page: pageParam, limit: PAGE_SIZE } },
  )
  return data.data
}

function ProjectSection() {
  const isMobile = useIsMobile()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PAGE_SIZE) return undefined
      return allPages.length + 1
    },
  })

  const allProjects = data?.pages ? data.pages.flatMap((page) => page) : []

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center gap-5 w-full"
    >
      <div className="relative flex justify-center items-center my-4 w-full overflow-hidden">
        <Separator className="bg-transparent border border-t border-border w-full h-1" />
        <div className="px-6 font-semibold text-2xl lg:text-5xl text-center">
          {' '}
          Projects{' '}
        </div>
        <Separator className="bg-transparent border border-t border-border w-full h-1" />
      </div>
      <div
        className={cn(
          'w-full ',
          isError
            ? 'flex justify-center items-center'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center place-items-center',
        )}
      >
        {isError ? (
          <p className="text-2xl lg:text-3xl text-center">
            Something went wrong , please try again later
          </p>
        ) : (
          <>
            {isLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <ProjectSkeleton key={`skeleton-initial-${index}`} />
              ))}

            {!isLoading &&
              allProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: isMobile ? true : false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 6) * 0.1,
                    ease: 'easeOut',
                  }}
                  className="w-full h-full"
                >
                  <Project project={project} />
                </motion.div>
              ))}

            {isFetchingNextPage &&
              Array.from({ length: 6 }).map((_, index) => (
                <ProjectSkeleton key={`skeleton-next-${index}`} />
              ))}
          </>
        )}
      </div>

      {hasNextPage && !isError && (
        <Button
          size="lg"
          className="flex items-center gap-2 bg-primary/50 px-10 rounded-xl w-fit"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          Load More
          {isFetchingNextPage ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <RefreshCcw />
            </motion.div>
          ) : (
            <RefreshCcw />
          )}
        </Button>
      )}
    </div>
  )
}

export default ProjectSection
