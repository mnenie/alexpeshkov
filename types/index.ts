interface WithId {
  id: number
}

export interface Contribution extends CardWithoutDescription {}
export interface Talk extends CardWithoutDescription {}

export interface Link extends WithId {
  section: 'about' | 'stack' | 'contributions' | 'projects' | 'talks'
  name: string
}

export interface CardWithoutDescription {
  img: string
  site: string
}

export interface Network {
  img: string
  name: string
  url: string
}

export interface Project {
  img: string
  title: string
  stack: string
  product?: string
  github: string
}

export interface Stack {
  icon: string
  technology: string
}
