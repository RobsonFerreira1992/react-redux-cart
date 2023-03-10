import Button from 'components/Button'
import MovieItem from 'components/MovieItem'
import * as S from'./styles'

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector';
import { moeda } from 'utils/mask';

import { getTotal } from 'features/cartSlice';
import Success from 'components/Success';

type SuccessProps = {
  setSuccess:(value:boolean) =>void
}

const OrdersList = ({ setSuccess}:SuccessProps ) =>{
  const carts = useAppSelector(state => state.cart)
  
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(getTotal(carts))
  },[carts, dispatch])
  return(

    <S.Wrapper>    
      <S.BoxDescription>
        <div className='title-produto'>
          <p>Produto</p>
        </div>
        <div className='title-qtd'>
          <p>Qtd</p>
        </div>
        <div className='title-subtotal'>
          <p >SubTotal</p>
        </div>
        <div className='title-exclusao'>
          <p></p>
        </div>
      </S.BoxDescription>
        {carts.cartItems.map((list, index)=> (
           <MovieItem cart={list} key={index}  id={list.id} image={list.image} price={list.price} title={list.title} cartQuantity={list.cartQuantity}/>
        ))}
        
        <S.Footer>
          <Button onClick={()=> setSuccess(true)}>Finalizar pedido</Button>
          <S.BoxTotal>
            <span>Total:</span>
            <S.Total>R$ {moeda(carts.cartTotalAmount)}</S.Total>
          </S.BoxTotal>
          
        </S.Footer>
    </S.Wrapper>

    
   
  )
}

export default OrdersList