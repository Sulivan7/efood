import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantsPerfil from './pages/RestaurantsPerfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant" element={<RestaurantsPerfil />} />
  </Routes>
)

export default Rotas
