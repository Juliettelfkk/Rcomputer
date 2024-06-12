import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from './pages/Home/Home';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage/ShopPage';
import { ShopContextProvider } from './context/ShopContextProvider';
import Cart from './pages/cart/Cart';
import Receipt from './pages/checkout/Receipt';
import Checkout from './pages/checkout/Checkout';
 
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
          <Route path="/receipt" element={<Receipt />} />

        </Routes>
        <Footer />
      </Router>

      </ShopContextProvider>
    

    </div>
  );
}

export default App;
