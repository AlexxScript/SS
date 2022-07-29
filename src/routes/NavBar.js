import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = ({show}) => {
    return (
        <ContenedorNav show={show}>
            <nav>
                <Navegador>
                    <li>
                        <Link className="link" to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className="link" to="/informacion">Información</Link>
                    </li>
                    <li>
                        <Link className="link" to="/consejos">Consejos</Link>
                    </li>
                    <li>
                        <Link className="link" to="/dinamicas">Dinámicas</Link>
                    </li>
                    <li>
                        <Link className="link" to="/formulario">Contáctanos</Link>
                    </li>
                </Navegador>
            </nav>
        </ContenedorNav>
    );
}

const ContenedorNav = styled.div`
    max-width: 1050px;
    width: 100%;
    margin: 0px auto;


    @media (max-width: 768px){
        position: fixed;
        top: 54px;
        width: 100%;
        margin-left: ${props =>(props.show ? "0" : "-150%")};
        transition: 0.3s;
    }
`;

const Navegador = styled.ul`
    display: flex;
    justify-content: flex-end;

    &>li{
        padding: 16px 0px;
        list-style: none;
    }

    @media(max-width: 768px){
        flex-direction: column;
        background: #FFFFFF;
        opacity: 0.7;
    }

`;