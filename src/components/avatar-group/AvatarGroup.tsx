import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useState } from 'react'

type AvatarProps = React.ComponentProps<typeof Avatar>
interface AvatarGroupProps extends React.ComponentProps<'div'> {
  children: React.ReactElement<AvatarProps>[]
  max?: number
}

const AvatarGroup = ({
  children,
  max,
  className,
  ...props
}: AvatarGroupProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const totalAvatars = React.Children.count(children)
  const displayedAvatars = React.Children.toArray(children)
    .slice(0, max)
    .reverse()
  const allAvatars = React.Children.toArray(children)
  const remainingAvatars = max ? Math.max(totalAvatars - max, 0) : 0
  return (
    <div
      className={cn('flex items-center flex-row-reverse', className)}
      {...props}
    >
      {remainingAvatars > 0 && (
        <Avatar
          className="hover:z-10 relative -ml-2 ring-2 ring-background"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className="sr-only">Open</PopoverTrigger>
            <PopoverContent className="flex flex-wrap max-w-[250px]">
              {allAvatars.map((avatar, index) => {
                if (!React.isValidElement(avatar)) return null
                return (
                  <div key={index} className="hover:z-10 relative -ml-2">
                    {React.cloneElement(
                      avatar as React.ReactElement<AvatarProps>,
                      {
                        className: 'ring-2 ring-background',
                      },
                    )}
                  </div>
                )
              })}
            </PopoverContent>
          </Popover>
          <AvatarFallback className="bg-muted-foreground dark:bg-muted text-white">
            +{remainingAvatars}
          </AvatarFallback>
        </Avatar>
      )}
      {displayedAvatars.map((avatar, index) => {
        if (!React.isValidElement(avatar)) return null
        return (
          <div key={index} className="hover:z-10 relative -ml-2">
            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {
              className: 'ring-2 ring-background',
            })}
          </div>
        )
      })}
    </div>
  )
}

export default AvatarGroup
