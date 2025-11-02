import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram-icon.png'
import facebook from '../../assets/images/facebook-icon.png'
import twitter from '../../assets/images/x-icon.png'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <Link to="/">
        <S.Logo src={logo} alt="Logo efood" />
      </Link>
      <S.SocialMedia>
        <a href="/">
          <img src={instagram} alt="" />
        </a>
        <a href="/">
          <img src={facebook} alt="" />
        </a>
        <a href="/">
          <img src={twitter} alt="" />
        </a>
      </S.SocialMedia>

      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado
      </S.Text>
    </S.Footer>
  )
}

export default Footer
