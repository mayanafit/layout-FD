import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <div className="title">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}

export default Title