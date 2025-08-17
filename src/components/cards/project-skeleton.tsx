import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Skeleton } from '../ui/skeleton'

function ProjectSkeleton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border-none w-full h-full">
      <CardHeader className="w-full max-h-[250px] overflow-hidden">
        <Skeleton className="rounded-xl w-full h-[250px] max-h-[250px] object-cover" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <CardTitle className="w-full">
            <Skeleton className="rounded-xl w-[80%] h-6 max-h-6" />
          </CardTitle>
          <Skeleton className="rounded-xl w-[20%] h-6 max-h-6" />
        </div>
        <CardDescription className="line-clamp-3">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className="sr-only">Open</PopoverTrigger>
            <PopoverContent
              className="text-sm"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="flex flex-col gap-2.5 w-full">
                <Skeleton className="rounded-xl w-full h-2.5 max-h-3" />
                <Skeleton className="rounded-xl w-[60%] h-2.5 max-h-3" />
                <Skeleton className="rounded-xl w-[30%] h-2.5 max-h-3" />
              </div>
            </PopoverContent>
          </Popover>
          <p
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex flex-col gap-2.5 w-full">
              <Skeleton className="rounded-xl w-full h-2.5 max-h-3" />
              <Skeleton className="rounded-xl w-[60%] h-2.5 max-h-3" />
              <Skeleton className="rounded-xl w-[30%] h-2.5 max-h-3" />
            </div>
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-5">
        <div className="w-[40%]">
          <Skeleton className="rounded-xl w-full h-8 max-h-8" />
        </div>
        <div className="flex">
          <Skeleton className="rounded-full w-10 h-10 max-h-10" />
          <Skeleton className="-mx-1 rounded-full w-10 h-10 max-h-10" />
          <Skeleton className="-mx-1 rounded-full w-10 h-10 max-h-10" />
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProjectSkeleton
