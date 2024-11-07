import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleCard = ({product}) => {
    const navigate = useNavigate();
    const { product_image, product_title, price, product_id} = product;
    return (
        <div className=' p-5 rounded-2xl hover:scale-110 transition bg-white/5'>
            <img className='object-contain w-72 h-44 rounded-2xl mb-6' src={product_image} alt="" />
            <h3 className='mb-3 font-semibold text-xl'>{product_title}</h3>
            <p className='mb-4 text-black/60'>{price}</p>
            <button onClick={() => navigate(`/details/${product_id}`)} className='btn bg-white hover:bg-white text-primary border-primary rounded-3xl'>View Details</button>
        </div>
    );
};

export default SingleCard;