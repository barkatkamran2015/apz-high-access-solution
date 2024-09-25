// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import { PaintingServices } from './pages/PaintingServices';
import { RedmedialServices } from './pages/RedmedialServices';
import { CleaningServices } from './pages/CleaningServices';
import Contact from './pages/Contact';
import Footer from './Footer';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/paintingservices" element={<PaintingServices />} />
                <Route path="/remedialservices" element={<RedmedialServices />} />
                <Route path="/cleaningservices" element={<CleaningServices />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
