import Button from 'components/Button'
import * as S from './styles'
import {Link} from 'react-router-dom'

const Success = () => {
  return(
    <S.Wrapper>
      <h1>Compra Realizada com sucesso !</h1>
      <S.BoxContentImg>
        <img src="img/sucesso.png" alt="Compra realizada com sucesso! " />
      </S.BoxContentImg>
      <Link to='/'>
        <Button >Voltar</Button>
      </Link>
    </S.Wrapper>
  )
}

export default Success