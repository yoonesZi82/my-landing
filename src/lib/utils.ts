import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { differenceInDays, format } from 'date-fns'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function formatDate(date: Date | string) {
  const newDate = new Date(date)
  const today = new Date()

  const diffDays = differenceInDays(today, newDate)

  if (diffDays === 0) {
    return 'Today'
  }

  if (diffDays === 7) {
    return 'Last week'
  }

  if (diffDays >= 1 && diffDays <= 6) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  }

  return format(newDate, 'yyyy MMM dd')
}

export { cn, formatDate }
