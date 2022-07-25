import React from 'react';
import {ContenedorFooter,ContenidoFooter,ContenidosHijos} from '../styles/estilos.js'
import styled from 'styled-components';

const Footer = () => {
    return(
        <ContenedorFooter>
            <ContenidoFooter>
                <ContenidosHijos>
                    <h1>Sobre el proyecto:</h1>
                    <p>
                        Buscamos formar parte del desarrollo cognitivo de 
                        creatividad y  la forma de desenvolverse en este 
                        ámbito, llevando consigo un proceso de descubrimiento 
                        de qué es, cómo ejercerla y qué hacer para dejarla fluir.
                    </p>
                </ContenidosHijos>
                <ContenidosHijos>
                    <h1>Recursos abiertos</h1>
                    <p>
                        Para el desarrollo del proyecto se utilizaron algunos
                        recursos gratuitos de las siguientes páginas y programas:
                    </p>
                    <a href="https://undraw.co/">Undraw</a>
                    <a href="https://inkscape.org/es/">Inskape</a>
                </ContenidosHijos>
            </ContenidoFooter>
        </ContenedorFooter>
    );
}

export default Footer;