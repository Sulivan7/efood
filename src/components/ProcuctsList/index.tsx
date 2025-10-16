import CardProduct from '../CardProduct'

import Products from '../../models/Products'

import * as S from './styles'

export type Props = {
  products: Products[]
}

const ProductsList = ({ products }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {products.map((product) => (
          <CardProduct
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ProductsList
