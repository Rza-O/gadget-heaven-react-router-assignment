import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div className=''>
            <ul className="menu bg-base-200 rounded-box w-56">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "bg-primary text-white" : ""}>
                        All Products
                    </NavLink>
                </li>
                {
                    categories.map(category => 
                        <li>
                            <NavLink key={category.slug} 
                            to={`/category/${category.category}`} 
                            className={({isActive})=> `${isActive ? 'bg-primary text-white' : ''}`}>
                                {category.category}
                            </NavLink>
                        </li>
                    )
                }
                
            </ul>
        </div>
    );
};

export default Categories;