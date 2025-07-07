import React, { useState } from 'react';

const Confirmation = () => {
  const [rating, setRating] = useState(null);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Thank you for your purchase!</h2>
      <p>Please help us improve your experience by rating your checkout experience:</p>

      <div style={{ fontSize: '2rem', margin: '1rem 0' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: 'pointer',
              color: rating >= star ? '#ffd700' : '#ccc'
            }}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      {rating && <p>You rated us {rating} out of 5. Thank you!</p>}
    </div>
  );
};

export default Confirmation;
