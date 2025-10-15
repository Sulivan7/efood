import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles/styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.pink};
  color: ${colors.peach};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.peach};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`
