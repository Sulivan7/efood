import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const Container = styled.footer`
  background-color: ${colors.peach};
  width: 100%;
  height: 300px;

  img {
    padding-top: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    padding-top: 80px;
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    color: ${colors.pink};
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;

  img {
    margin-right: 8px;
  }
`
