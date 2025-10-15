import { createGlobalStyle } from 'styled-components'

export const Colors = {
  pink: '#E66767',
  peach: '#FFEBD9',
  white: '#FFFFFF',
  cream: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
body {
  background-color: ${Colors.cream};
  color: ${Colors.pink};
}
`
