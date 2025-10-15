import restaurantImg from '../../assets/images/hiokiSushi.png'
import starImage from '../../assets/images/star.png'

import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

const Card = () => (
  <S.CardContainer>
    <img src={restaurantImg} alt="Hioki Sushi" />
    <Tag>Destaque da semana</Tag>
    <Tag>Japones</Tag>
    <S.Content>
      <S.Title>
        Hioki Sushi
        <span>
          4.6
          <img
            src={starImage}
            alt="Imagem de uma estrela mostrando a avaliação"
          />
        </span>
      </S.Title>
      <S.Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </S.Description>
      <Button type="button" title="">
        Saiba mais
      </Button>
    </S.Content>
  </S.CardContainer>
)

export default Card
