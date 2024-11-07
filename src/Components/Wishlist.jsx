import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartWishList from '../Utility';
import WishCard from './WishCard';

const Wishlist = () => {
    const { wishlist, removeItemFromWishList, addToCart } = useCartWishList();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        addToCart(item);
        removeItemFromWishList(item.product_id);
    };

    return (
        <div>
            <div className="w-10/12 mx-auto mt-4">
                <h2 className="text-xl font-bold">Wishlist</h2>
                <div className="mt-6">
                    {wishlist.length > 0 ? (wishlist.map((item) => (
                        <WishCard key={item.product_id} item={item} removeItemFromWishList={removeItemFromWishList} handleAddToCart={handleAddToCart}>
                        </WishCard>
                    )))
                        : (
                        <div className="text-center mt-4 space-y-6">
                            <h1 className="text-4xl">Your wishlist is sooo empty!</h1>
                            <p className="text-lg text-black/40">Add item to your wishlist...</p>
                            <button onClick={() => navigate('/')} className="btn bg-primary text-white rounded-2xl">Shop Now</button>
                        </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
