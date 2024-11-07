import React from 'react';
import useCartWishList from '../Utility';

const Cart = () => {
    const {cart, removeCartItem} = useCartWishList()

    return (
        <div>
            <h2>Cart item</h2>
            <ul>
                {
                    cart.map(item=> (
                        <li key={item.product_id}>
                            <p>{item.product_title}</p>
                            <button onClick={()=> removeCartItem(item.product_id)}>remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Cart;