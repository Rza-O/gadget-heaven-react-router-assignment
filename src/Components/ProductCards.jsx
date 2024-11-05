import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCard from './SingleCard';

const ProductCards = () => {
    const productsData = useLoaderData();
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if(category){
            const filteredByCategory = [...productsData].filter(product => product.category === category)
            setProducts(filteredByCategory)
        }
        else{
            setProducts(productsData.slice(0,6))
        }
    }, [category, productsData]);

    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                products.map(product => <SingleCard key={product.product_title} product={product}></SingleCard>)
            }
        </div>
    );
};

export default ProductCards;