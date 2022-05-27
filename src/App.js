import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import NavBar from './components/NavBar';

function App() {
  return(
    <BrowserRouter>
    <header>
      <NavBar />
    </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informacion" element={<h1>Información</h1>} />
        <Route path="/consejos" element={<h1>Consejos</h1>} />
        <Route path="/dinamicas" element={<h1>Dinámicas</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
