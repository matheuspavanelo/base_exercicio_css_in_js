import { Cabecalho } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const CabecalhoComponent = () => (
  <Cabecalho>
    <h1>EBAC Jobs</h1>
  </Cabecalho>
)

export default CabecalhoComponent
