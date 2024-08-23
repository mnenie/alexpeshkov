interface Contribution extends CardWithoutDescription {}
interface Talk extends CardWithoutDescription {}

interface Link {
  id: number
  section: string
  name: string
}

interface CardWithoutDescription {
  id: number
  img: string
  site: string
}
