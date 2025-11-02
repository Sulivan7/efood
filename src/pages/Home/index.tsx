import { useGetRestaurantsQuery } from '../../services/api'

import Card from '../../components/Card'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'

import { Cards, Main } from '../../styles'

const Home = () => {
  const { data: cardapio } = useGetRestaurantsQuery()

  if (cardapio) {
    return (
      <>
        <Hero />
        <Main>
          <Cards tipoCards="principal">
            {cardapio.map((prato) => (
              <Card
                key={prato.id}
                id={prato.id}
                imagem={prato.capa}
                destacado={prato.destacado}
                botoesImagem={prato.tipo}
                titulo={prato.titulo}
                nota={prato.avaliacao}
                descricao={prato.descricao}
              />
            ))}
          </Cards>
        </Main>
      </>
    )
  } else {
    return <Loader />
  }
}

export default Home
