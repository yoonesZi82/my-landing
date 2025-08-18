import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { cn, formatDate } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useState } from 'react'
import type { ProjectType } from './types/project.type'
import AvatarGroup from '../avatar-group/AvatarGroup'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Skeleton } from '../ui/skeleton'

function Project({ project }: { project: ProjectType }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <Card className="border-none w-full h-full">
      <CardHeader className="relative w-full max-h-[250px] overflow-hidden">
        {!isImageLoaded && (
          <Skeleton className="rounded-xl w-full h-[180px] lg:h-[250px]" />
        )}
        <img
          src={`https://web-yoones-api.onrender.com/uploads/project/${project.projectUrl}`}
          alt="site"
          className={cn(
            'rounded-xl w-full max-h-[250px] object-cover transition-opacity duration-500',
            isImageLoaded ? 'opacity-100' : 'opacity-0',
          )}
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.src = '/images/logo.png'
            setIsImageLoaded(true)
          }}
          loading="lazy"
        />
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <CardTitle className="w-full">{project.title}</CardTitle>

          <Badge variant="outline" className="rounded-xl">
            {formatDate(project.createdAt)}
          </Badge>
        </div>
        <CardDescription className="line-clamp-3">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className="sr-only">Open</PopoverTrigger>
            <PopoverContent
              className="text-sm"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {project.description}
            </PopoverContent>
          </Popover>
          <p
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {project.description}
          </p>
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between items-center gap-5">
        <Button className="rounded-lg w-1/2" asChild>
          <a href={project.link} target="_blank">
            See project
          </a>
        </Button>

        <AvatarGroup className="flex items-center" max={3}>
          {project.frameworks.map((fw, index) => (
            <Avatar key={index} className="-ml-2 first:ml-0 cursor-pointer">
              <AvatarImage
                src={`https://web-yoones-api.onrender.com/uploads/framework/${fw.framework.frameworkUrl}`}
                alt={fw.framework.name}
                className="w-full h-full object-cover"
              />
              <AvatarFallback className="bg-primary text-white">
                {fw.framework.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </CardFooter>
    </Card>
  )
}

export default Project
