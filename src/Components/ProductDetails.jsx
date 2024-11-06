import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from 'react-icons/fa';

const ProductDetails = () => {
    const productsData = useLoaderData();
    const { id } = useParams();
    const [products, setProducts] = useState({});
    useEffect(() => {
        const singleProduct = productsData.find(p => p.product_id == id)
        setProducts(singleProduct);
        console.log(singleProduct);
    }, [productsData, id]);
    const { product_title, product_image, price, description, specification, availability, rating } = products;
    console.log(rating);
    return (
        <div>
            <div className='border-2 border-green-400'>
                <Banner title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Banner>
            </div>
            <div className='flex gap-8 border p-7 w-3/4 mx-auto rounded-3xl'>
                <img className='border rounded-2xl w-[425px] h-[500px] object-contain' src={product_image} alt="" />
                <div className='space-y-4'>
                    <h1 className='text-3xl font-semibold'>{product_title}</h1>
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                    <div><span className={availability ? 'border border-[#309c08] px-4 py-2 bg-green-400/10 rounded-3xl text-[#309c08]' : 'border px-4 py-2 rounded-3xl text-black/60 bg-black/10'}>{availability ? 'In Stock' : 'Out of Stock'}</span></div>
                    <p className='text-lg text-black/60'>{description}</p>
                    <p className='text-lg font-bold'>Specification:</p>
                    {specification && specification.length > 0 ?
                        specification.map((spec, idx) =>
                            <p key={idx}>{idx + 1}. {spec}</p>
                        )
                        : ''}
                    <p className='text-lg font-bold'>Rating: {rating}</p>
                    <Rating
                        value={rating || 0}
                        readOnly
                        precision={0.1}
                        size="large"
                    />
                    <div className='flex space-x-4'>
                        <button className='btn hover:bg-primary bg-primary text-white'>Add To Cart <BsCart2 /></button>
                        <button className='btn rounded-full hover:text-red-500'><FaRegHeart className=''/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;