import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import Events from './pages/Events';
import Booking from './pages/Booking';
import OrderOnline from './pages/OrderOnline';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/events" element={<Events />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/order" element={<OrderOnline />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;