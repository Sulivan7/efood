import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;

  a {
    color: ${Colors.pink};
    text-decoration: none;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: 18px;
`

export const LinkItem = styled.li`
  img {
    display: flex;
    max-width: 125px;
    height: 58px;
  }
`
