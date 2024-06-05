import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage/ShopPage';
import { ShopContext, ShopContextProvider } from './context/ShopContextProvider';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
 <ShopContextProvider>

      <Router>
        <NavBar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/cart' element={<Cart/>}/>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer />
      </Router>

      </ShopContextProvider>
    

    </div>
  );
}

export default App;
