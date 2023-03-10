import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { MovieProps } from 'types'

interface Cart  {
  cartItems: MovieProps[],
  cartTotalQuantity: number,
  cartTotalAmount:number
}
const initialState ={
  cartItems:[],
  cartTotalQuantity: 0,
  cartTotalAmount:0
} as Cart
const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart(state, action: PayloadAction<MovieProps>){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      ) 
      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1
      }else{
        const tempProducts = {...action.payload, cartQuantity: 1}
        state.cartItems.push(tempProducts as any)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state,action){
      const nextCartItems = state.cartItems.filter((cartItem)=> cartItem.id !== action.payload.id)
      state.cartItems = nextCartItems
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    decreaseCart(state,action){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      ) 
      if(state.cartItems[itemIndex].cartQuantity > 1){
        state.cartItems[itemIndex].cartQuantity -= 1
      }else if(state.cartItems[itemIndex].cartQuantity === 1){
        const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
        state.cartItems = nextCartItems
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    clearCart(state, action){
      state.cartItems =[]
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    getTotal(state, action){
      let {total, quantity} = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const {price, cartQuantity} = cartItem
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total:0,
          quantity: 0
        }
      )
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    }
  }
})
export const {addToCart, removeFromCart , decreaseCart, getTotal, clearCart} = cartSlice.actions

export default cartSlice.reducer