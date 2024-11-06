import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import SingleCard from './SingleCard';

const ProductCards = () => {
    const location = useLocation()
    const isHome = location.pathname === '/';
    const productsData = useLoaderData();
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        if(category){
            const filteredByCategory = [...productsData].filter(product => product.category === category)
            setProducts(filteredByCategory)
        }
        else if (showAll){
            setProducts(productsData)
        }
        else{
            setProducts(productsData.slice(0,6))
        }
    }, [category, productsData, showAll]);

    const viewAllBtnHandler = () => {
        setShowAll(!showAll)
    }


    return (
            <div>
                <div className='grid grid-cols-3 gap-6 '>
                    {
                        products.map(product => <SingleCard key={product.product_title} product={product}></SingleCard>)
                    }
                </div>
                {
                isHome && <button onClick={viewAllBtnHandler} className='btn mt-5 rounded-xl bg-primary text-white hover:bg-primary'>{showAll? 'Show Less' : 'View All'}</button>
                }
            </div>
        
    );
};

export default ProductCards;