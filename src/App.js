import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './routes/Inicio';
import Informacion from './routes/Informacion';
import Header from './routes/Header';
import Footer from './routes/Footer';
import GALAK from './routes/GALAK.js';

function App() {
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/consejos" element={<h1>Consejos</h1>} />
        <Route path="/dinamicas" element={<h1>Dinámicas</h1>} />
        <Route path="/GALAK" element={<GALAK/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
