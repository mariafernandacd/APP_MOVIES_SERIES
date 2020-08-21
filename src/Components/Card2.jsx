import React from 'react';
import { Link } from 'react-router-dom';

const Card2 = ({ img, title, media, id, subtitle }) => {
    return (
        <Link to={`/${media}/${id}/info`} className="wrapper-card">
            <div className="card-img">
                <img 
                src={img} 
                className="card-img-top" 
                alt={title} />
            </div>
            <h3 className="card-title">{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        </Link>
    )
}

export default Card2


