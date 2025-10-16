import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantList'
import Footer from '../../components/Footer'

import type Restaurants from '../../models/Restaurant'

import imagetest from '../../assets/images/hiokiSushi.png'

const restaurantes: Restaurants[] = [
  {
    id: 1,
    image: imagetest,
    infos: ['Destaque da semana'],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 2,
    image: imagetest,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: imagetest,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: imagetest,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: imagetest,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: imagetest,
    infos: [],
    category: 'Brasileira',
    title: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantsList restaurants={restaurantes} />
    <Footer />
  </>
)

export default Home
