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
import { format } from 'date-fns'
import { Badge } from '../ui/badge'
import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'

function ProjectCard({ id }: { id: number }) {
  const newDate = new Date()
  const formattedDate = format(newDate, 'yyyy MMM dd')
  return (
    <Card className="border-none w-full h-full">
      <CardHeader className="w-full max-h-[250px] overflow-hidden">
        <img
          src="/images/logo.png"
          alt="site"
          className="rounded-xl w-full max-h-[250px] object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <CardTitle>Send on time</CardTitle>
          <Badge variant="outline" className="rounded-xl">
            {formattedDate}
          </Badge>
        </div>
        <CardDescription className="line-clamp-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          repudiandae eaque perspiciatis aliquid dolorum eligendi vitae sapiente
          recusandae? Aspernatur placeat molestiae ipsa? Itaque fugiat
          asperiores deleniti beatae officia, inventore sit, officiis illum ea
          est et magni deserunt, cumque exercitationem. Minus quae placeat omnis
          dolore corrupti fugiat praesentium quo, pariatur perspiciatis.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-5">
        <Button className="rounded-lg w-1/2" asChild>
          <Link to="/projects/$id" params={{ id: String(id) }}>
            See project
          </Link>
        </Button>
        <AvatarGroup className="flex items-center" max={3}>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="bg-indigo-500 text-white">
              CN
            </AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarFallback className="bg-green-600 text-white">
              CN
            </AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarFallback className="bg-red-500 text-white">
              AB
            </AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarFallback className="bg-indigo-500 text-white">
              VK
            </AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarFallback className="bg-orange-500 text-white">
              RS
            </AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
