import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AvatarGroup from '../avatar-group/AvatarGroup'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useState } from 'react'
import { formatDate } from '@/lib/utils'
import type { ProjectType } from './types/project.type'

function ProjectCard({ project }: { project: ProjectType }) {
  const newDate = new Date()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border-none w-full h-full">
      <CardHeader className="w-full max-h-[250px] overflow-hidden">
        <img
          src={`/imagess/${project.projectUrl}`}
          alt="site"
          className="rounded-xl w-full max-h-[250px] object-cover"
          onError={(e) => {
            e.currentTarget.src = '/images/logo.png'
          }}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <CardTitle>{project.title}</CardTitle>
          <Badge variant="outline" className="rounded-xl">
            {formatDate(newDate)}
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
          {project.framework.map((framework, index) => (
            <Avatar key={index} className="-ml-2 first:ml-0 cursor-pointer">
              <AvatarImage src={`/images/${framework}.png`} alt={framework} />
              <AvatarFallback className="bg-primary text-white">
                {framework.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
