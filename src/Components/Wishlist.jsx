import React from 'react';
import useCartWishList from '../Utility';

const Wishlist = () => {
    const { wishlist, removeItemFromWishList } = useCartWishList();
    console.log(wishlist);
    return (
        <div>
            <h2>wishlist item</h2>
            <ul>
                {
                    wishlist.map(item => (
                        <li key={item.product_id}>
                            <p>{item.product_title}</p>
                            <button onClick={() => removeItemFromWishList(item.product_id)}>remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Wishlist;