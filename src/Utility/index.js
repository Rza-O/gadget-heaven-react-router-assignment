import React from 'react';

const useCartWishList = () => {
    const [cart, setCart] = useState(()=> {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : [];
    });
};



export default useCartWishList;