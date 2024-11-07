import React, { useState } from 'react';
import useCartWishList from '../Utility';
import CartCard from './CartCard';
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ImSad } from "react-icons/im";

const Cart = () => {
    const { cart, removeCartItem } = useCartWishList()
    const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
    const navigate = useNavigate();

    const [isSortedDescending, setIsSortedDescending] = useState(false);

    const sortToggle = () => {
        setIsSortedDescending(!isSortedDescending)
    };

    const sortedCart = [...cart].sort(((a, b) => {
        return isSortedDescending? b.price - a.price : a.price - b.price
    }))

    return (
        <div >
            <div className='w-10/12 mx-auto justify-between flex items-center mt-4'>
                <h2 className='text-xl font-bold'>Cart</h2>
                <div className='flex items-center space-x-6'>
                    <h1 className='mr-14 text-xl font-bold'>Total Cost: ${totalCost.toFixed(2)}</h1>
                    <div onClick={sortToggle} className='flex items-center border border-primary text-primary p-3 rounded-3xl gap-1 cursor-pointer hover:bg-gray-200'>Sort by price {isSortedDescending?
                        <FaSortAmountDown /> : <FaSortAmountUp />
                        }</div>
                    <div className='border px-8 rounded-3xl bg-primary text-white btn'>Purchase</div>
                </div>
            </div>
            <div className='mt-6'>
                {
                    sortedCart.length > 0 ? (sortedCart.map(item => <CartCard removeCartItem={removeCartItem} item={item}></CartCard>))
                        : (<div className='w-10/12 p-24 mx-auto text-center space-y-4'>
                            <h1 className='text-4xl'>Your cart is soo... <span className='font-bold flex items-center justify-center mt-4'>Empty!<ImSad className='ml-1' /></span></h1>
                            <p className='text-lg text-black/40'>Choose the right gadget for you today...</p>
                            <button onClick={()=> navigate('/')} className='btn bg-primary text-white rounded-2xl'>Shop Now</button>
                        </div>
                        )}
            </div>
        </div>
    );
};

export default Cart;