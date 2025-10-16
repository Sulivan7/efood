import { Link } from 'react-router-dom'
import styled from 'styled-components'

import type { Props } from '.'

import { colors } from '../../styles/styles'

export const ButtonContainer = styled.button<Props>`
  background-color: ${({ variant }) =>
    variant === 'primary' ? colors.peach : colors.pink};
  color: ${({ variant }) =>
    variant === 'primary' ? colors.pink : colors.peach};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.peach};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`
