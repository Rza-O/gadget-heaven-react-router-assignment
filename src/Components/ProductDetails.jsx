import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const productsData = useLoaderData();
    const { product_title, product_image, price, description, Specification, availability, rating } = productsData;
    console.log(productsData);
    const { id } = useParams();
    const [products, setProducts] = useState({});
    useEffect(() => {
        const singleProduct = productsData.find(p => p.product_id == id)
        setProducts(singleProduct);
    }, [productsData, id]);
    return (
        <div>
            <div className='border-2 border-green-400'>
                <Banner title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Banner>
            </div>
            <div className='border-2 border-red-400 flex space-x-8'>
                <div>
                    {
                        <img src={product_image} alt="" />
                    }
                </div>
                <div>
                    <h1>{product_title}</h1>
                hello
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;