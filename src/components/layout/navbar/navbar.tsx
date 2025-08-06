import { Button } from '@/components/ui/button'
import { NavMenu } from './nav-menu'
import { NavSheet } from './nav-sheet'
import { Moon, Sun } from 'lucide-react'
import Logo from './logo'
import { useTheme } from 'next-themes'

function Navbar() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="top-6 z-[999] fixed w-full container">
      <nav className="bg-primary rounded-full w-full max-w-screen-[1440px] h-16">
        <div className="flex justify-between items-center mx-auto px-4 h-full">
          <Logo />
          <NavMenu className="hidden md:block" />
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="border-none rounded-full">
              Text to me
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="hidden sm:flex border-none rounded-full"
              onClick={changeTheme}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </Button>
            <div className="md:hidden">
              <NavSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
