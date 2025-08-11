interface ProjectType {
  id: number
  title: string
  description: string
  projectUrl: string
  link: string
  framework: string[]
  createdAt: Date
  updatedAt: Date
}

export type { ProjectType }
