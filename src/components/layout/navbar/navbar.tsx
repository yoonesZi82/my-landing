import { Button } from '@/components/ui/button'
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
    <div className="flex justify-center items-center w-full">
      <div className="z-[999] pt-6 w-full container">
        <nav className="bg-primary rounded-full w-full h-16">
          <div className="flex justify-between items-center px-4 h-full">
            <Logo />
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                className="border-none rounded-full"
                asChild
              >
                <a href="#text-me">Text to me</a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-none rounded-full"
                onClick={changeTheme}
              >
                {theme === 'light' ? <Moon /> : <Sun />}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
