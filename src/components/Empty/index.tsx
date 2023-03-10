import Button from 'components/Button'
import * as S from './styles'
import {Link} from 'react-router-dom'
const Empty = () => {
  return(
    <S.Wrapper>
      <h1>Parece que não há nada por aqui :(</h1>
      <S.BoxContentImg>
        <img src="img/empty.png" alt=" Lista de compras vazia volte novamente a pagina da home" />
      </S.BoxContentImg>
      <Link to='/'>
        <Button >Voltar</Button>
      </Link>
      
    </S.Wrapper>
  )
}

export default Empty