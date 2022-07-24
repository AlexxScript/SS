import styled from 'styled-components';

export const Btn = ({click}) =>{
    return(
        <Boton onClick={click}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </Boton>
    );
}

export const ContenedorHeader = styled.header`
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

const Boton = styled.button` 
    display: none;

    @media (max-width: 798px){
        display: inline-block;
        background: transparent;
        border: none;
        color: #aaa;
        margin: 12px 12px;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            color: #ccc;
            transition: 0.3s;
        }

        &>svg{
            height: 30px;
            width: 30px; 
        }

    }
`;

export default Btn;
