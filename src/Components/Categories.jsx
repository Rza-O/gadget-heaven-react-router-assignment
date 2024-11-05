import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div>
            <ul className="menu bg-base-200 rounded-box w-56">
                {
                    categories.map(category => 
                        <li>
                            <Link key={category.slug} 
                            to={`/category/${category.category}`}>
                                {category.category}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Categories;