import React from 'react';

const ArticleCard = ({image, title, author, published}) => {
    return (
        <div className="content">
            <div className="content_image">
                <img src={image} alt="article-blog" />
            </div>
            <div className="content_description">
            <h3>{title}</h3>
                <small><b>{author}</b> | {published}</small>
            </div>
        </div>
    )
}

export default ArticleCard