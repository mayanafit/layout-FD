import React from 'react';
import { Col, Row } from 'reactstrap';
import { ArticleCard, Title } from '../libraries';
import { useSelector } from 'react-redux';

const Articles = () => {
    const {articles} = useSelector(state => state);

    return (
        <section className="article container">
            <div className="flex flex-jc-sb flex-ai-fe">
                <Title title="Latest Articles" subtitle="So you can make better purchase decision"/>
                <p>See more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{">"}</p>
            </div>
            <Row>
                {
                    articles && articles.map((article, index) => (
                        <Col sm="12" md="3" key={index} className="article_card">
                            <ArticleCard image={article.image} title={article.title} author={article.author} published={article.published_at} />
                        </Col>
                    ))
                }
            </Row>
        </section>
    )
}

export default Articles