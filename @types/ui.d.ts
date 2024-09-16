interface Contribution extends CardWithoutDescription {}
interface Talk extends CardWithoutDescription {}

interface Link {
  id: number
  section: 'about' | 'stack' | 'contributions' | 'projects' | 'talks'
  name: string
}

interface CardWithoutDescription {
  id: number
  img: string
  site: string
}
