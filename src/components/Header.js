import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Header = () => {
    return (
        <ContenedorHeader>
            <NavBar />
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.header`
    height: 54px;
    width: 100%;
    position: fixed;
    display: flex;
    z-index: 1000;
    /* From https://css.glass */
    background: #ffffff99;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);
    border: 1px solid rgba(255, 255, 255, 0.29);
`;

export default Header;
