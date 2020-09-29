import React from 'react';
import Star from '../assets/star.svg';
import Unstar from '../assets/unstar.svg';

const ProductCard = ({name, rating, description, image, addon}) => {
    return (
        <div className="product">
            <img className="product_image" src={image} alt="product" />
            <div className="product_rating flex flex-ai-c">
                <span>{rating}</span>
                {
                    Array(Math.floor(Number(rating))).fill(0).map((val, index) => (
                        <img src={Star} alt="star" key={index} />
                    ))
                }
                {
                    Array(5-Math.floor(Number(rating))).fill(0).map((val, index) => (
                        <img src={Unstar} alt="star" key={index} />
                    ))
                }
                <span>(7)</span>
            </div>
            <div className="product_description">
                <p className="addon">{addon}</p>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Rosy Beige</p>
            </div>
        </div>
    )
}

export default ProductCard