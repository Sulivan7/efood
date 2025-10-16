import { Link } from 'react-router-dom'
import bgImage from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Header = () => (
  <S.HeaderBar style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="container">
      <nav>
        <S.Links>
          <S.LinkItem>
            <Link to="/">Restaurantes</Link>
          </S.LinkItem>
          <S.LinkItem>
            <img src={logo} alt="Logo do site efood" />
          </S.LinkItem>
          <S.LinkItem>
            <a href="#">0 produto(s) no carrinho</a>
          </S.LinkItem>
        </S.Links>
      </nav>
    </div>
  </S.HeaderBar>
)

export default Header
