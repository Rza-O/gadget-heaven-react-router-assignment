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
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.product_id === product.product_id);
            if (!existingProduct) {
                const updatedCart = [...prevCart, product]
                toast.success('Product Added to the cart!')
                return updatedCart
            }
            else {
                toast.error('Product already added to the cart')
                return prevCart
            }
        })
    }

    const addToWishlist = (product) => {
        setWishlist((exWishList) => {
            const updatedWishList = [...exWishList, product]
            toast.success(`${product.product_title} added to Wishlist`);
            return updatedWishList;
        })
    }

    

    return {
        cart, wishlist, addToCart, addToWishlist, 
    }
};


export default useCartWishList;