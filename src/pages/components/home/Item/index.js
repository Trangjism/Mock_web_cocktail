import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItems } from '../../../../redux/cartSlice';
import { cartItem } from '../../../../redux/selectors';
import ImageDetail from '../ImageDetail';



import './item.scss'

export default function Item(props) {   
    const giohang = useSelector(cartItem)
    const [isAdd, setIsAdd] = useState(false)
    const dispatch = useDispatch();
    const {value, id} = props;
    const handleCartChange = () => {        
        let itemUpdate = {
            name: value?.strDrink,
            img: value?.strDrinkThumb,
            price: +(value?.idDrink * 0.001).toFixed(2),            
            id: id,
            amount: 1
        };     
        dispatch(updateCartItems(itemUpdate));
        setIsAdd(true)
        console.log(giohang)
        
    }
  return (
    <div className='item-list' >
        <div className='item-list-img'>
            <ImageDetail src={value?.strDrinkThumb}/>
            {/* <img src={value?.strDrinkThumb}/> */}
        </div>
        <div className='item-list-info'>
            <p>{value?.strDrink}</p>
            <p>{`$${(+value?.idDrink * 0.001).toFixed(2)}` }</p>
        </div>
        <div className='item-list-btn'>
            {isAdd ? (<button>Added</button>) : ( <button onClick={handleCartChange}>Add to Cart</button>)}
            {/* <button onClick={handleCartChange}>Add to Cart</button> */}
        </div>
    </div>
  )
}
