import React, { useState } from 'react';
import './cartItem.scss';
import { useDispatch } from 'react-redux';
import { deleteItem, plusAmount, minusAmount } from '../../../../redux/cartSlice';
import { getItemPrice } from '../../../../components/utils';


export default function CartItem(props) {
  const {value, id, array} = props;
  // const {isEmty, setisEmty} = useState(true);
  const dispatch = useDispatch();
  const handleItemRemove = () => {
    // dispatch(minusAmount(id))
    if(value.amount == 1) {
      alert('Minimum quantity is 1')
    } else {
      dispatch(minusAmount(id))
    }
  }
  const handleItemAdd = () => {        
    if(value.amount == 7) {
      alert('Minimum quantity is 7')
      
    } else {
      dispatch(plusAmount(id))   
    }
  }
  const handleItemDelete = () => {
    dispatch(deleteItem(id))    
  }
  return (
    <div >
        <div  className='cart-item'>            
          <div className='cart-item-img'>
              <img src={value?.img}/>
          </div>
          <div className='cart-item-name'>
              <div>
                <h2>{value?.name}</h2>
              </div>
              <div className='cart-item-name-btn'>
                  <button onClick={handleItemAdd}>+</button>
                      <p>{value?.amount}</p>
                   <button onClick={handleItemRemove}>-</button>
                   
              </div>
          </div>
          <div className='cart-item-price'>
            <h2>${getItemPrice(array, id).toFixed(2)}</h2>                                    
          </div>  
          <div className='cart-item-delete'>                             
            <button onClick={handleItemDelete}>delete</button>                                   
          </div>      
        </div>
                                  
      </div>
  )
}
