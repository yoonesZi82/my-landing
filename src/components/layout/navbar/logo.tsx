import { Link } from '@tanstack/react-router'

function Logo() {
  return (
    <Link to="/">
      <div className="flex justify-center items-center rounded-full w-10 h-10 overflow-hidden">
        <img src="/images/logo.png" alt="logo" />
      </div>
    </Link>
  )
}

export default Logo
