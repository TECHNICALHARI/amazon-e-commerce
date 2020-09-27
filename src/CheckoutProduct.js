import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image1,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    console.log(id,title,image1,price,rating)
    const removeFromBasket=()=>{
        // Remove item from basket...
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })

    }
    return (
        <div className="checkoutProduct">
        <img src={image1} alt="" className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
            {Array(rating)
                        .fill()
                        .map((_,i) => {
                            return (
                                <span>⭐️</span>
                            )
                        })}
            </div>
            <button className="checkoutProduct_info" onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
