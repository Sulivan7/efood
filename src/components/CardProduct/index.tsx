import Button from '../Button'

import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const CardProduct = ({ image, title, description }: Props) => (
  <S.CardContainer>
    <img src={image} alt={title} />
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button variant="primary" type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </S.Content>
  </S.CardContainer>
)

export default CardProduct
