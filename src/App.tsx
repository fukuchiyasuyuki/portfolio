import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './compornents/Header';
import Home from './compornents/Home';
import Works from './compornents/Works';
import Contact from './compornents/Contact';
import Footer from './compornents/Footer';
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
