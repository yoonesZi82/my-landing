import { Separator } from '@/components/ui/separator'
import { Link } from '@tanstack/react-router'
import { GithubIcon, Instagram, Linkedin, Send } from 'lucide-react'
import Logo from '../navbar/logo'

const footerLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Project',
    href: '#project',
  },
  {
    title: 'About me',
    href: '#about-me',
  },
]

const Footer = () => {
  return (
    <footer>
      <div className="w-full">
        <div className="flex flex-col justify-start items-center py-12">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <ul className="flex flex-wrap items-center gap-4 mt-6">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  to={href}
                  className="font-medium text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="w-full container">
          <div className="flex sm:flex-row flex-col-reverse justify-between items-center gap-x-2 gap-y-5 py-8">
            <span className="text-muted-foreground">
              Built with ❤️ by Younes – Full Stack Developer
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a
                href="https://www.instagram.com/yoones_zamani_"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/Yoones_Zi82" target="_blank">
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yoones-zamani-5ba496379/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bw4OsgPQcRS%2Bir5urZftVgw%3D%3D"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/yoonesZi82" target="_blank">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
