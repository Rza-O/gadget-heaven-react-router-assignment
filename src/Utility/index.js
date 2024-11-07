import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useCartWishList = () => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishList = localStorage.getItem('wishlist')
        return savedWishList ? JSON.parse(savedWishList) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);


    const addToCart = (product) => {
        console.log(product);
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.product_id === product.product_id);
            if (existingProduct) {
                toast.error('Product already added to the cart')
                return prevCart
            }
            else {
                const updatedCart = [...prevCart, product]
                toast.success(`${product.product_title} added to the cart`)
                return updatedCart
            }
        })
    }

    const clearCart = () => {
        setCart([]);
    }

    const addToWishlist = (product) => {
        setWishlist((prevWishList)=> {
            const existingProduct = prevWishList.find(item => item.product_id === product.product_id)
            if(existingProduct){
                toast.error(`${product.product_title} already in your Wishlist`)
                return prevWishList;
            }
            const updatedWishList = [...prevWishList, product];
            toast.success(`${product.product_title} added to your wishlist!`);
            return updatedWishList;
        })
    }


    const removeCartItem = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.product_id !== productId);
            toast.success('Product removed from cart')
            return updatedCart;
        })
    }

    const removeItemFromWishList = (productId) => {
        setWishlist((prevWishList) => {
            const updatedWishList = prevWishList.filter(item => item.product_id !== productId);
            toast.success('Product removed from the wishlist')
            return updatedWishList
        })
    }

    const isInCart = (productId) => cart.find(item => item.product_id === productId);
    const isInWishList = (productId) => wishlist.find(item.product_id === productId); 

    return {
        cart, wishlist, addToCart, removeCartItem, addToWishlist, removeItemFromWishList, clearCart, isInCart, isInWishList
    }
};


export default useCartWishList;