import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import shoes from '../data/shoes';
import { useCart } from '../context/CartContext';

const ShoeDetail = () => {
  const { id } = useParams();
  const shoe = shoes.find((s) => s.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  if (!shoe) return <div>Shoe not found</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    // Add shoe with selected size
    addToCart({ ...shoe, size: parseFloat(selectedSize) });

    // Show notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // hide after 3s
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{shoe.name}</h2>
    <img
          src={shoe.image}
          alt={shoe.name}
          style={{ width: '200px', userSelect: 'none', pointerEvents: 'none' }}
          draggable="false"
    />
      <div style={{ marginTop: '1rem' }}>
        <label><strong>Select Size:</strong>{' '}
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            style={{ marginLeft: '0.5rem', padding: '0.25rem' }}
          >
            <option value="">--Choose a size--</option>
            {shoe.size.map((sz) => (
              <option key={sz} value={sz}>{sz}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Table with details */}
      <table style={{ borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ccc' }}>Aggressiveness</th>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ccc' }}>Durability</th>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ccc' }}>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>{shoe.details.aggressiveness}</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>{shoe.details.durability}</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>{shoe.details.bestFor}</td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: '1rem' }}>{shoe.details.description}</p>

      <button 
        onClick={handleAddToCart} 
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
      >
        Add to Cart
      </button>

      {/* Notification */}
      {showNotification && (
        <div style={{
          marginTop: '1rem',
          padding: '0.5rem',
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
          borderRadius: '5px',
          maxWidth: '300px'
        }}>
          ✅ Added to cart!
        </div>
      )}
    </div>
  );
};

export default ShoeDetail;
