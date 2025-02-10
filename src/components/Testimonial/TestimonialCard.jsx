import React from 'react';
import './TestimonialStyle.css';
import starIcon from '../../assets/Img/star.png';

const TestimonialCard = ({ name, location, review, stars, image }) => {
    return (
<div className="card-testimonial">
    <div className="card-top">
        <div className="card-author">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-info">
                <p className="text-lg-bold">{name}</p>
                <p className="text-sm">{location}</p>
            </div>
        </div>
        <div className="card-rate">
            {Array.from({ length: stars }, (_, i) => (
                <img
                    key={i}
                    src={starIcon}
                    alt="Star"
                    className="star-icon"
                />
            ))}
        </div>
    </div>
    <hr />
    <div className="card-review">
        <p>{review}</p>
    </div>
</div>
    );
};

export default TestimonialCard;