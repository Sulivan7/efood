// src/components/CardRestaurant/index.tsx
import Tag from '../Tag'
import Button from '../Button'

import starImg from '../../assets/images/star.png'

import * as S from './styles'

type Props = {
  image: string
  category: string
  infos: string[]
  title: string
  avaliation: number
  description: string
}

const CardRestaurant = ({
  image,
  category,
  infos,
  title,
  avaliation,
  description
}: Props) => (
  <S.CardContainer>
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
      <Tag>{category}</Tag>
    </S.Infos>
    <S.Content>
      <S.Title>
        {title}
        <span>
          {avaliation}
          <img src={starImg} alt="Avaliação" />
        </span>
      </S.Title>
      <S.Description>{description}</S.Description>
      <Button variant="secondary" type="button" title="Saiba Mais">
        Saiba Mais
      </Button>
    </S.Content>
  </S.CardContainer>
)

export default CardRestaurant
