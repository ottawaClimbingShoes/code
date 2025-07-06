import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import "../App.css";

const Header = () => {
  const { cart } = useCart();

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem',
      position: 'relative',
      backgroundColor: '#1e2a38'
    }}>

      <Link className="header-style header-text" to="/">Shoes</Link>

      <div className = "header-text" style={{ 
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        Ottawa Climbing Shoes
      </div>

      <Link className="header-style header-text" to="/cart" style={{paddingRight:20}}>
        🛒({cart.length})
      </Link>
    </header>
  );
};

export default Header;
