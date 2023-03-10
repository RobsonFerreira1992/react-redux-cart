import * as S from './styles'
import {Bin2} from '@styled-icons/icomoon/Bin2'
import { AddCircle } from '@styled-icons/fluentui-system-regular/AddCircle'
import { RemoveCircle } from '@styled-icons/ionicons-outline/RemoveCircle'
import { MovieProps } from 'types'
import { moeda } from 'utils/mask'
import { useDispatch } from 'react-redux'
import { addToCart, decreaseCart, removeFromCart } from 'features/cartSlice'
type CartProps = {
  cart:MovieProps,
  id: number,
  title: string,
  price: number,
  image: string,
  cartQuantity:number
}

const MovieItem =({id,image,title, price, cartQuantity,cart}:CartProps) =>{
  const dispatch = useDispatch()
  const handleRemoveFromCart = (cart: MovieProps) => {
    dispatch(removeFromCart(cart))
  }
  const handleDecreaseCart = (cart: MovieProps) =>{
    dispatch(decreaseCart(cart))
  }

  const handleIncreaseCart = (cart: MovieProps) =>{
    dispatch(addToCart(cart))
  }



return (
  <S.Wrapper>
    <S.MovieContent>
      <S.ImageBox>
        <img src={image} alt={`Capa ${title}`} />
        
      </S.ImageBox>
      
      <S.Content>
          <S.Title>
           {title} 
          </S.Title>
          <S.Price>{moeda(price)}</S.Price>
        </S.Content>
        <S.ContentQuant>
          <div className='content-q'>
            <button className='remove-items'onClick={()=> handleDecreaseCart(cart)} ><RemoveCircle  size={26} color='#009EDD'/></button>
            <div className='input-q'>{cartQuantity}</div>
    
            <button className='add-items' onClick={()=> handleIncreaseCart(cart)}><AddCircle color='#009EDD' size={26}/></button>
          </div>
        </S.ContentQuant>
        <S.SubTotal>
          <div>
            <p> R$ {moeda(price * cartQuantity )}</p>
          </div>
        </S.SubTotal>
        <S.SubRemove>
          <div>
            <button onClick={() => handleRemoveFromCart(cart)}>{<Bin2 size={20} color='#009EDD'/>}</button>
          </div>
        </S.SubRemove>

        
    </S.MovieContent>
  </S.Wrapper>
)
}

export default MovieItem