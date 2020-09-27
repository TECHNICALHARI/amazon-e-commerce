import React from 'react'
import {useStateValue} from './StateProvider';
import banner5 from './Image/banner5.jpg';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
            <img src={banner5} className="checkout_ad" alt="checkout" />
            {basket?.length===0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket.To buy one or more items,click "Add to basket" next to the item.</p>
                </div>
            ) : (
                <div>
                <h2 className="checkout_title" >Your Shopping Basket</h2>
                {/* List out all of the checkout products */}
                {basket.map((item)=>{
                    console.log(item);
                    return (
                <CheckoutProduct 
                 id={item.id}
                 title={item.title}
                 image1={item.image1}
                 price={item.price}
                 rating={item.rating}
                />);
                
                })}
                </div>
            )}
            </div>
            {basket.length> 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;
