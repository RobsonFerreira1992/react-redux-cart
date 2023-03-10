import Button from 'components/Button'
import { useAppSelector } from 'hooks/useTypedSelector'
import { useState } from 'react'
import { AddShoppingCart } from 'styled-icons/material'
import { moeda } from 'utils/mask'
import * as S from './styles'


type CartProps ={
  id:number,
  image:string,
  title:string,
  price:number,
  handleAdd:(value: any)=> void
  movie: any
}

const Cart = ({id, image, title, price, handleAdd, movie}:CartProps) =>{
  const [added, setAdded] = useState(false)
  const [qtd, setQtd] = useState(0)


  const handleClick = (movie:any) => {
    setAdded(true)
    handleAdd(movie)
    setQtd(qtd + 1)
  }

return (
  <S.Cart id={String(id) } >
    <S.ContentBox>
      <S.BoxImage>
        <img src={image} alt={` Filme ${title}`} />
      </S.BoxImage>
      <S.BoxDescribe>
        <S.Title>{title}</S.Title>
        <S.Price>R$ {moeda(price)}</S.Price>
      </S.BoxDescribe>
      <Button add={added}  icon={<AddShoppingCart size={16} />} onClick={()=> handleClick(movie)}> {qtd}  Adicionar ao carrinho</Button>
    </S.ContentBox>  
  </S.Cart>
)
}
export default Cart