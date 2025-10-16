import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const CardContainer = styled.div`
  background-color: ${colors.pink};
  color: ${colors.peach};
  padding: 8px;
  width: 320px;

  img {
    width: 100%;
    margin-bottom: 8px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
