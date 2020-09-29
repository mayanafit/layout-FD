import React from 'react';
import Star from '../assets/star.svg';
import Unstar from '../assets/unstar.svg';

const ReviewCard = ({image, name, description, rating, comment}) => {
    return (
        <div className="review-card">
            <div className="flex review-card_product">
                <img src={image} alt="product"/>
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <hr />
            <div className="product_rating flex flex-ai-c">
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
            </div>
            <div className="review-card_comment">
                <p>{comment}</p><span>Read More..</span>
            </div>
        </div>
    )
}

export default ReviewCard