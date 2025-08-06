import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import type { NavigationMenuProps } from '@radix-ui/react-navigation-menu'
import { Link, useRouterState } from '@tanstack/react-router'

export const NavMenu = (props: NavigationMenuProps) => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const isActive = (path: string) => pathname === path

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start gap-6 space-x-0">
        <NavigationMenuItem className="group relative">
          <NavigationMenuLink
            asChild
            className="hover:bg-transparent focus:bg-transparent text-primary-foreground hover:text-secondary focus:text-white transition-colors duration-300"
          >
            <Link to="/" className="relative px-1">
              Home
              <span
                className={cn(
                  'bottom-0 left-1/2 absolute h-[2px] transition-all duration-300 -translate-x-1/2',
                  isActive('/')
                    ? 'w-full bg-white dark:bg-white/90'
                    : 'w-0 group-hover:w-full bg-white/50',
                )}
              ></span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="group relative">
          <NavigationMenuLink
            asChild
            className="hover:bg-transparent focus:bg-transparent text-primary-foreground hover:text-secondary focus:text-white transition-colors duration-300"
          >
            <Link to="/projects" className="relative px-1">
              Projects
              <span
                className={cn(
                  'bottom-0 left-1/2 absolute h-[2px] transition-all duration-300 -translate-x-1/2',
                  isActive('/projects')
                    ? 'w-full bg-white dark:bg-white/90'
                    : 'w-0 group-hover:w-full bg-white/50',
                )}
              ></span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
