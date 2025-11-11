import styled from 'styled-components'
import background from '../../assets/images/background.png'
import { Breakpoints, Colors } from '../../styles'

type Props = {
  background: string
}

type PropsTitle = {
  type: string
}

export const Container = styled.header`
  width: 100%;
  background-image: url(${background});
`

export const Header = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4.carrinho {
    cursor: pointer;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;

    h4 {
      padding: 20px;
    }
  }

  @media (max-width: ${Breakpoints.tablet}) {
    justify-content: space-around;
  }
`

export const ImageContainer = styled.div<Props>`
  width: 100%;
  height: 280px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${Breakpoints.mobile}) {
      padding-left: 80px;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      padding-left: 50px;
    }
  }
`

export const Title = styled.h1<PropsTitle>`
  font-family: 'Roboto';
  font-weight: ${(props) => (props.type === 'categoria' ? 100 : 900)};
  font-size: 32px;
  color: ${Colors.white};
  padding: ${(props) => (props.type === 'categoria' ? '25px 0px' : '32px 0px')};

  @media (max-width: ${Breakpoints.mobile}) {
    padding: ${(props) =>
      props.type === 'categoria' ? '25px 0px' : '32px 0px'};
  }
`
