import React from 'react';
import useCartWishList from '../Utility';

const Cart = () => {
    const {cart, removeCartItem} = useCartWishList()
    console.log(cart);

    return (
        <div>
            <h2>Cart item</h2>
            <ul>
                {Array.isArray(cart) && cart.length > 0 ?
                    (cart.map(item=> (
                        <li key={item.product_id}>
                            <p>{item.product_title}</p>
                            <button onClick={()=> removeCartItem(item.product_id)}>remove</button>
                        </li>
                    ))):(<p>No items in the Cart</p>)
                }
            </ul>
        </div>
    );
};

export default Cart;