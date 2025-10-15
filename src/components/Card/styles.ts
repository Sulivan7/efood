import styled from 'styled-components'

import { colors } from '../../styles/styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.div`
  background-color: ${colors.pink};

  width: 472px;
  height: 398px;

  img {
    width: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Content = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.pink};
  padding: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
  }

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
  display: block;
`
