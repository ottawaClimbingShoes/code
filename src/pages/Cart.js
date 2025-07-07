import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Group items by ID and size
  const groupedItems = cart.reduce((acc, item) => {
    const found = acc.find((i) => i.id === item.id && i.size === item.size);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {groupedItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {groupedItems.map((item, index) => (
            <div
              key={`${item.id}-${item.size}-${index}`}
              style={{
                border: '1px solid #ccc',
                marginBottom: '1rem',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white'
              }}
            >
              <div>
                <strong>{item.name}</strong> (Size {item.size})
                <p>Quantity: {item.quantity}</p>
              </div>
              <img src={item.image} alt={item.name} width="80" />
            </div>
          ))}

          <button
            style={{
              marginTop: '2rem',
              padding: '1rem 2rem',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '5px'
            }}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
