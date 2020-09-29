import React from 'react';
import { Row, Col } from 'reactstrap';
import { Title, ProductCard } from '../libraries';
import { useSelector } from 'react-redux';

const Trending = () => {
    const { choices } = useSelector(state => state)
    return (
        <section className="container" style={{marginTop: '3em', marginBottom: '3em'}}>
            <div className="flex flex-jc-sb flex-ai-fe" style={{marginBottom: '2em'}}>
                <Title title="Trending This Week" subtitle="See our weekly most reviewed products"/>
                <p>See more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{">"}</p>
            </div>
            <Row>
                {
                    choices && choices.map((choice, index) => (
                        <Col key={index}>
                            <ProductCard name={choice.product.name} rating={choice.product.rating} description={choice.product.description} image={choice.product.image} />
                        </Col>
                    ))
                }
            </Row>
        </section>
    )
}

export default Trending