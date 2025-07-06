import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Checkout = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/confirmation');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label className="checkout-label">
          Name
          <input type="text" required className="checkout-input" />
        </label>

        <label className="checkout-label">
          Shipping Address
          <textarea required className="checkout-textarea" />
        </label>

        <label className="checkout-label">
          Credit Card Number
          <input type="text" maxLength="16" required className="checkout-input" />
        </label>

        <label className="checkout-label">
          Expiration Date
          <input type="month" required className="checkout-input" />
        </label>

        <label className="checkout-label">
          CVV
          <input type="text" maxLength="4" required className="checkout-input" />
        </label>

        <button type="submit" className="checkout-button">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
