import React from 'react';

const SingleCard = ({product}) => {
    const { product_image, product_title, price } = product;
    return (
        <div>
            <h1>{product_title}</h1>
        </div>
    );
};

export default SingleCard;