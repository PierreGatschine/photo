import React from 'react';
import './index.scss'

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return (
        <div className="category-container">
                <div className='background-image' style={{backgroundImage: `url(${imageUrl})`,}} />
                <div className="category-body-container">
                    <h2>{title}</h2>
                </div>

        </div>
    );
};

export default CategoryItem;