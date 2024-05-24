
import NavBar from './components/NavBar'
import ContactPage from './pages/ContactPage';
import Home from './pages/Home'
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';


function App() {


  return (

    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>

      </Router>

    </div>

  )
}

export default App
