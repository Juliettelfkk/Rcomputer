import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar" ;
import Footer from "./components/Footer" ;
import Home from "./pages/Home" ;
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <div>
      <Router>
        <NavBar /> 
        

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
