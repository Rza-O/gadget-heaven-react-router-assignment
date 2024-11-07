import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import useCartWishList from '../Utility';

const CartCard = ({ item, removeCartItem }) => {
    // const { removeCartItem } = useCartWishList();
    // console.log(item.item.product_title);
    return (
        <div className='w-10/12 mx-auto border rounded-2xl p-8 flex justify-between items-center bg-white mb-6'>
            <img className='w-52 h-32 object-contain rounded-2xl border-primary border' src={item.product_image} alt="" />
            <div className='w-[900px] p-4 ml-6 space-y-4'>
                <h1 className='text-2xl font-semibold'>{item.product_title}</h1>
                <p className='text-black/50'>{item.description}</p>
                <p>${item.price}</p>
            </div>
            <IoIosCloseCircleOutline cursor='pointer' onClick={() => removeCartItem(item.product_id)} className='text-red-500 text-3xl'/>
        </div>
    );
};

export default CartCard;