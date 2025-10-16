class Restaurants {
  id: number
  image: string
  infos: string[]
  category: string
  title: string
  avaliation: number
  description: string

  constructor(
    id: number,
    image: string,
    infos: string[],
    category: string,
    title: string,
    avaliation: number,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.category = category
    this.title = title
    this.avaliation = avaliation
    this.description = description
  }
}

export default Restaurants
