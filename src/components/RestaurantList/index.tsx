import CardRestaurant from '../CardRestaurant'

import Restaurants from '../../models/Restaurant'

import * as S from './styles'

export type Props = {
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {restaurants.map((restaurant) => (
          <CardRestaurant
            key={restaurant.id}
            image={restaurant.image}
            category={restaurant.category}
            infos={restaurant.infos}
            title={restaurant.title}
            avaliation={restaurant.avaliation}
            description={restaurant.description}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default RestaurantsList
