import {useEffect} from 'react'
import * as S from './styles'
import {Container} from '../../components/Container';
import { Loading } from '../../components/Loading';
import Header from 'components/Header';
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector';
import { productsFetch } from '../../features/produtsSlice';
import { addToCart, clearCart } from 'features/cartSlice';
import Cart from 'components/Cart';

const Home = () =>{
  const { loading, data } = useAppSelector((state) => state.products);
  const carts = useAppSelector(state => state.cart)

  const dispatch = useAppDispatch();
  useEffect(() => {
   
    dispatch(productsFetch());
  }, [dispatch]);
useEffect(()=>{
  localStorage.removeItem('cartItems') 
  dispatch(clearCart(carts));
},[])

  const handleAdd = (movie:any) =>{
    dispatch(addToCart(movie))
  }
  return (
    <>
      
      <S.Wrapper>
        <Header/>
        <Container>
          <S.Content>
          { loading ? (
          <S.BoxLoading>
            <Loading/>
          </S.BoxLoading>
          ):(
            <>
              {data && data.map((movie:any, index:any) => (
                <Cart id={movie.id} key={index} image={movie.image} title={movie.title} price={movie.price} handleAdd={handleAdd} movie={movie} />
              ))}
            </>
          )}
          </S.Content>
        </Container>
      </S.Wrapper>
    
    </>
    
   
  )
}
export default Home;