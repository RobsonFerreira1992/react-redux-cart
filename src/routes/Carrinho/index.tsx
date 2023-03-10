import { Container } from 'components/Container';
import Empty from 'components/Empty';
import OrdersList from 'components/OrdersList';
import {useState} from 'react'
import * as S from './styles'
import { useAppSelector } from 'hooks/useTypedSelector';
import Header from 'components/Header';
import Success from 'components/Success';
const Carrinho = () =>{
const carts = useAppSelector(state => state.cart)
const [success, setSuccess] = useState(false)

  return (
    <S.Wrapper>
      <Header/>
      
        <Container>
          {!success ?  
            <>
              {carts.cartItems.length > 0 ?  (
                <OrdersList setSuccess={setSuccess} />
              ): (
                <Empty />
              )}
            </> 
          : <Success/>}
       
       
      </Container>
      
      
    </S.Wrapper>
  )
}
export default Carrinho;