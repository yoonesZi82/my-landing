import type { FrameworkType } from './framework.type'

interface ProjectType {
  id: number
  title: string
  description: string
  projectUrl: string
  link: string
  frameworks: [{ framework: FrameworkType }]
  createdAt: Date
  updatedAt: Date
}

export type { ProjectType }
