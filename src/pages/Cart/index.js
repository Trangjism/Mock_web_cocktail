import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import { cartItem } from '../../redux/selectors';
import { getTotalPrice } from '../../components/utils';

import './cart.scss';
import CartAlert from '../../components/CartAlert';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector(cartItem);
  return (    
      <div className='cart'>
        <div className='cart-alert'>
          <CartAlert/>
        </div>
        <header>
          <Link to='/'>Home</Link>
          {cart.slice(1).map((item) => {
            return (
              <div className='cart-list'>
                  <CartItem value={item} array={cart} id={item.id}/>   
              </div>
            )
          })}
          {console.log(cart)}
                
        </header>        
       
        <div className='total'>
          <p>Total: ${getTotalPrice(cart).toFixed(2)}</p>
        </div>  
      </div>
      
    
  )
}
