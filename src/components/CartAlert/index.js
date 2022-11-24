import React from 'react';
import { Badge } from 'antd';
import './cartAlert.scss';
import { useSelector } from 'react-redux';
import { cartItem } from '../../redux/selectors';



function getTotalAmount (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        total += p.amount;
    }
    return total;
}



export default function CartAlert() {
    const cart = useSelector(cartItem)
  return (
    <div>
        <Badge count={getTotalAmount(cart)}>
            <p className='alert'>Cart</p> 
          </Badge>
    </div>
  )
}
