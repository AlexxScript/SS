import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';
import GALAK from './components/GALAK.js';

function App() {
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informacion" element={<h1>Información</h1>} />
        <Route path="/consejos" element={<h1>Consejos</h1>} />
        <Route path="/dinamicas" element={<h1>Dinámicas</h1>} />
        <Route path="/GALAK" element={<GALAK/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
