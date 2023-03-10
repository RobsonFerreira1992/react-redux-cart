import CartShopping from 'components/CartShopping'
import { Container } from 'components/Container'
import * as S from './styles'
import {Link} from 'react-router-dom'





const Header = () => {
  return(
    <S.Wrapper>
      <Container>
        <S.ContentBox>
          <Link to='/'>
            <S.Logo>
              WeMovies
            </S.Logo>
          </Link>
          
          <Link to='/carrinho'>
            <CartShopping/>
          </Link>

        </S.ContentBox>
      </Container>
    </S.Wrapper>
  )
}

export default Header