import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const WishCard = ({ item, removeItemFromWishList, handleAddToCart, wishlist }) => {
    console.log(item.product_id);
    return (
        <div className='flex justify-between items-center p-4 border-b'>
            <div className='flex items-center space-x-4'>
                <img className='w-52 h-32 object-contain border border-primary rounded-2xl' src={item.product_image} alt="" />
                <div className='w-[900px] p-4 ml-6 space-y-4'>
                    <h3 className='text-2xl font-semibold'>{item.product_title}</h3>
                    <p className='text-black/50'>{item.description}</p>
                    <p className='font-semibold'>Price: ${item.price}</p>
                <button onClick={()=> handleAddToCart(item)} className='btn bg-primary text-white'>Add to Cart</button>
                </div>
            </div>
            <div>
                <IoIosCloseCircleOutline cursor='pointer' onClick={() => removeItemFromWishList(item.product_id)} className='text-red-500 text-3xl' />
            </div>
        </div>
    );
};

export default WishCard;