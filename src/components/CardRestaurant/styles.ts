import styled from 'styled-components'

import { colors } from '../../styles/styles'

export const CardContainer = styled.div`
  position: relative;
  width: 472px;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.pink};
  padding: 8px;
`

export const Title = styled.h3`
  color: ${colors.pink};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
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
  margin: 16px 0 16px 0;
`
