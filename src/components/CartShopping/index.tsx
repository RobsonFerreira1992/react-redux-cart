
import { getTotal } from 'features/cartSlice'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { useEffect } from 'react'
import * as S from'./styles'


const CartShopping = () =>{
  const carts = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(getTotal(carts))
  },[carts, dispatch])
  return(
    <S.Wrapper>
      <S.ContentBox>
        <div>
          <h4>Meu carrinho</h4>
          <p>{carts.cartTotalQuantity} item</p>
        </div>
        <div>
          <img src="img/cart-shopping.svg" alt="Carrinho de compras " />
        </div>
      </S.ContentBox>
    </S.Wrapper>
  )
}

export default CartShopping