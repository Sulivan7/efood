import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const Banner = styled.div`
  width: 100%;
  height: 380px;
  text-align: center;

  img {
    margin: 64px 0 138px 0;
  }

  h1 {
    font-weight: bold;
    font-size: 36px;
    color: ${colors.pink};
  }
`
