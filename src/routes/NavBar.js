import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <ContenedorNav>
            <nav>
                <Navegador>
                    <li>
                        <NavLink className="link" to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/informacion">Información</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="consejos">Consejos</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="dinamicas">Dinámicas</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="GALAK">GALAK</NavLink>
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
`;

const Navegador = styled.ul`
    display: flex;
    justify-content: flex-end;

    &>li{
        padding: 16px 0px;
        list-style: none;
    }

    @media (max-width: 768px){
        flex-direction: column;
        margin-left: -100%;
    }
`;

export default NavBar;
