import { Link } from 'react-router-dom'
import { Container, SocialLinks } from './styles'
import logo from '../../assets/images/logo.png'
import facebookIcon from '../../assets/images/facebook-icon.png'
import instagramIcon from '../../assets/images/instagram-icon.png'
import xIcon from '../../assets/images/twitter-icon.png'

const Footer = () => (
  <Container>
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
    <SocialLinks>
      <li>
        <a href="#">
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={xIcon} alt="Twitter" />
        </a>
      </li>
    </SocialLinks>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
