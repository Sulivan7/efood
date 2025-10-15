import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { colors } from '../../styles/styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  color: ${colors.white};

  .container {
    position: relative;
    padding-top: 214px;
  }

  ${TagContainer} {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 25px;
    background-color: transparent;
    font-weight: 100;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
