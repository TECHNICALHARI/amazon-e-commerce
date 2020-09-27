import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image1, price, rating }) {
    const [{},dispatch]=useStateValue();
    const addToBasket=()=>{
        // Add item to basket
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image1:image1,
                price:price,
                rating:rating,
            }
        })
        
    }
    return (
        <div className="product">
            <div className="produc_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_) => {
                            return (
                                <span>⭐️</span>
                            )
                        })}
                </div>
            </div>
            <img src={image1} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
