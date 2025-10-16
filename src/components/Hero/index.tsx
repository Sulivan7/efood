import { Link } from 'react-router-dom'

import { Banner } from './styles'

import logo from '../../assets/images/logo.png'
import bgImage from '../../assets/images/bg.png'

export const Hero = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bgImage})` }}>
      <Link to="/">
        <img src={logo} alt="Logo do eFood" />
      </Link>
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </Banner>
  </>
)

export default Hero
