import React,{
  useState,
  } from 'react';
import { 
  Routes, 
  Route } from 'react-router-dom';
import './App.css';
import Inicio from './routes/Inicio';
import Informacion from './routes/Informacion';
import {ContenedorHeader} from './routes/Btn';
import Footer from './routes/Footer';
import {Formulario} from './routes/Formulario';
import Consejos from './routes/Consejos';
import ScrollToTop from './routes/ScrollToTop';
import { NavBar } from './routes/NavBar'
import { Btn } from './routes/Btn'
import Dinamicas from './routes/Dinamicas';

function App() {

  const [show, setShow] = useState({value:false});

  const mostrar = () => {
    setShow((config) => {
      const configuracion = {...config};
      configuracion.value = !configuracion.value;
      return configuracion;
    });
  }

  return(
    <ScrollToTop>
      <ContenedorHeader>
        {/* <a href='/'><img className="imagen" src={log} /></a> */}
        <Btn click={mostrar} show={show} />
        <NavBar show={show.value} />
      </ContenedorHeader>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/consejos" element={<Consejos/>} />
        <Route path="/dinamicas" element={<Dinamicas />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    <Footer/>
    </ScrollToTop>
  );
}

export default App;
