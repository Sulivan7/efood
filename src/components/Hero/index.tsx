import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'

const Hero = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link to="/">
          <img src={logo} alt="Logo efood" />
        </Link>
      </S.Logo>

      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.Container>
  )
}

export default Hero
