import { createContext, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

export const cartContext = createContext();

export default function CartContext({children}) {

  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.findIndex( (item) => item.id === id );
  
  const addItem = (item, quantity) => {
    
    const index = isInCart(item.id);
    
    const currentCart = cart;

    const cartItem = {
      id: item.id,
      quantity: quantity,
      price: item.price, 
    }

    if ( index > -1) {
      currentCart[index].quantity += quantity; 
      setCart(currentCart);
    } else {
      setCart([...cart, cartItem]);
    }
    
  }

  return <cartContext.Provider value={{ cart, setCart, addItem }}>{children}</cartContext.Provider>

}



