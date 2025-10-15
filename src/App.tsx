import Banner from './components/Banner'
import Header from './components/Header'

import { GlobalCss } from './styles/styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
