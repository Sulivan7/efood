import styled from 'styled-components'

import type { Props } from '.'
import { colors } from '../../styles/styles'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.pink};
  color: ${colors.peach};
  font-size: ${(props) => (props.size === 'big' ? '32px' : '12px')};
  font-weight: 700;
  padding: 6px 4px;
`
