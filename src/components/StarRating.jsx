import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const StarRating = ({ rating, totalStars }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<BsStarFill className='' key={i} style={{ color: '#ffe234', fontSize: 20 }}/>);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<BsStarHalf key={i} style={{ color: '#ffe234', fontSize: 20 }} />);
    } else {
      stars.push(<BsStar key={i} style={{ color: '#ffe234', fontSize: 20}} />);
    }
  }

  return (
    <div className='d-flex align-items-center'>
      {stars.map((star, index) => (
        <span key={index} style={{ marginRight: '5px' }}>
          {star}
        </span>
      ))}
      <span className='semibold'>{rating * 2}/{totalStars * 2}</span>
    </div>
  );
};

export default StarRating;
