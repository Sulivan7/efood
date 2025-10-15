import bannerImage from '../../assets/images/presentation.png'

import Tag from '../Tag'

import * as S from './styles'

const Banner = () => (
  <S.Image style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="container">
      <Tag size="big">Italiana</Tag>
      <S.Title>La Dolce Vita Trattoria</S.Title>
    </div>
  </S.Image>
)

export default Banner
