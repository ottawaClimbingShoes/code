import React from 'react';
import { Link } from 'react-router-dom';

const ShoeCard = ({ shoe }) => {
  return (
    <div className="shoe-card">
    <img
      src={shoe.image}
      alt={shoe.name}
      style={{ width: '200px', userSelect: 'none', pointerEvents: 'none' }}
      draggable="false"
    />
      <h3>
        <Link to={`/shoe/${shoe.id}`}>{shoe.name}</Link>
      </h3>

      {/* Only show sale if it exists */}
      {shoe.sale && <p className='sale'>{shoe.sale}%</p>}

      <p >{shoe.price} $</p>
    </div>
  );
};

export default ShoeCard;
