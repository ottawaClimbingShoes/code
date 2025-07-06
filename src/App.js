import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Shop from './pages/Shop';
import ShoeDetail from './pages/ShoeDetail';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout.js"
import Confirmation from './pages/Confirmation';
import { CartProvider } from './context/CartContext'; // ⬅️ import your context provider
import "./App.css"

function App() {
  return (
    <CartProvider> {/* ⬅️ Wrap the whole app */}
      <Router>
        <div className="App">
          <Header />
          <div className="content-wrap main1">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/shoe/:id" element={<ShoeDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Confirmation" element={<Confirmation />} />

            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
