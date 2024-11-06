import React from 'react';

const SingleCard = ({product}) => {
    const { product_image, product_title, price } = product;
    return (
        <div className='border p-5 rounded-2xl'>
            <img className='object-fit w-72 h-44 rounded-2xl mb-6' src={product_image} alt="" />
            <h3 className='mb-3'>{product_title}</h3>
            <p className='mb-4'>{price}</p>
            <button>View Details</button>
        </div>
    );
};

export default SingleCard;