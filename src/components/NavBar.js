import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/informacion">Información</NavLink>
                </li>
                <li>
                    <NavLink to="consejos">Consejos</NavLink>
                </li>
                <li>
                    <NavLink to="dinamicas">Dinámicas</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
