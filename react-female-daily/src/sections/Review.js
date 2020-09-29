import React from 'react';
import { Col, Row } from 'reactstrap';
import { ReviewCard, Title } from '../libraries';
import { useSelector } from 'react-redux';
import EditorChoices from './EditorChoices';

const Review = () => {
    const {reviews} = useSelector(state => state);

    return (
        <section className="container review">
            <div className="flex">
                <div className="review_content">
                    <div className="flex flex-jc-sb flex-ai-fe">
                        <Title title="Latest Reviews" subtitle="So you can make better purchase decision"/>
                        <p>See more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{">"}</p>
                    </div>
                    <div className="flex review_card">
                        {   
                            reviews && reviews.map((review, index) => (
                                <div className="flex flex-column">
                                    <div className="review_card" key={index}>
                                        <ReviewCard image={review.product.image} name={review.product.name} description={review.product.desc} rating={review.star} comment={review.comment} />
                                    </div>
                                    <div className="review_figure flex flex-column flex-jc-c flex-ai-c">
                                        <div className="review_figure_image">
                                            <img src="https://hallyumusic.com/wp-content/uploads/2019/11/MAMAMOO-Wheein-COVER.png" alt="public-figure" />
                                        </div>
                                        <div className="review_figure_name">
                                            <h4>{review.user}</h4>
                                            <p>{review.profile.join(`,  `)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="ads ads_third"><p>Billboard 970x250</p></div>
                </div>
            </div>
        </section>
    )
}

export default Review