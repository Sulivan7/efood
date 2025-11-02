import { GridLoader } from 'react-spinners'

import { Container } from './styles'
import { Colors } from '../../styles'

const Loader = () => {
  return (
    <Container>
      <GridLoader color={Colors.salmon} />
    </Container>
  )
}

export default Loader
