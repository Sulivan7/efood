import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'

import { GlobalCss } from './styles/styles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
