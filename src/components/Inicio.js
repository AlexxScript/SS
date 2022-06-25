import React from 'react';
import styled from 'styled-components';
import img from '../logo.png';

const Inicio = () => {
    return (
        <ContenedorInicio>
            <ContenedorX>
                <ContenedorImagen>
                    <img src={img} />
                    <p>Mente creativa, vida creativa</p>
                </ContenedorImagen>
                <Article>
                    <h1>Proposito</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis.
                        Eleifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. E
                        leifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. Eleifend neque, pretium gravida 
                        urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. Eleifend neque, pretium gravida 
                        urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turp
                        is. Eleifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis.
                        Eleifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. E
                        leifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. Eleifend neque, pretium gravida 
                        urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. Eleifend neque, pretium gravida 
                        urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turp
                        is. Eleifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis.
                        Eleifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. E
                        leifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. Eleifend neque, pretium gravida 
                        urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. Eleifend neque, pretium gravida 
                        urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turp
                        is. Eleifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.
                    </p>
                    {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#A7F0BA88" d="M30.8,-39.1C37.9,-30.8,40.2,-19.1,39.5,-9C38.8,1.1,35.2,9.6,32.8,23.8C30.4,37.9,29.2,57.5,20.8,63.2C12.4,69,-3.4,60.7,-19,54.2C-34.6,47.6,-50.1,42.7,-61,31.5C-72,20.3,-78.3,2.7,-74,-11.4C-69.6,-25.5,-54.4,-36.2,-40.3,-43.3C-26.2,-50.4,-13.1,-54,-0.6,-53.2C11.9,-52.5,23.7,-47.5,30.8,-39.1Z" transform="translate(100 100)" />
                    </svg> */}
                </Article>
            </ContenedorX>
        </ContenedorInicio>
    );
}

const ContenedorInicio = styled.div`
    display: flex;
    z-index: 0;
    box-sizing: content-box;
    background: rgb(152,207,227);
    background: linear-gradient(90deg, rgba(152,207,227,1) 0%, rgba(195,222,232,1) 100%);
    /* background: linear-gradient(270deg, rgba(145, 234, 228, 0.89) 1.25%, rgba(18, 222, 250, 0.89) 46.76%, rgba(136, 206, 255, 0.89) 100%); */
`;

const ContenedorX = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr,1fr,1fr,1fr;
    grid-template-rows: 1fr,1fr,1fr;
    grid-template-areas:"img img img img"
                        "text text text text";
    margin: 0px auto 50px auto;

`;

const ContenedorImagen = styled.div`
    display: flex;
    position: relative;
    max-width: 400px;
    max-height: 1050px;
    height: 100%;
    width: 100%;
    /* top: 15%; */
    justify-content: center;
    align-items: center;
    margin: 0px auto 0px auto;
    grid-area: img;
    flex-direction: column;
    font-size: 30px;
    color: #fff;

    &>img{
        height: 40%;
        width: auto;
    }

    @media (max-width: 768px){
        width: 100%;
        font-size: 15px;

            &>img{
                height: 25%;
                width: auto;
            }
    }

    @media (max-width: 590px){
        margin-top: 15%;
        width: 100%;
        height: 100%;
        font-size: 13px;

            &>img{
                height: 18%;
                width: auto;
            }
    }

    @media (max-width: 450px){
        margin-top: 15%;
        width: 100%;
        height: 100%;
        font-size: 13px;

            &>img{
                height: 15%;
                width: auto;
            }
    }

    @media (max-width: 390px){
        margin-top: 15%;
        width: 100%;
        height: 100%;
        font-size: 11px;

            &>img{
                height: 10%;
                width: auto;
            }
    }

    @media (max-width: 300px){
        margin-top: 15%;
        width: 100%;
        height: 100%;
        font-size: 8px;

            &>img{
                height: 7%;
                width: auto;
            }
    }

`;

const Article = styled.article`
    display: flex;
    flex-direction: column;
    grid-area: text;
    max-width: 990px;
    margin: 0px auto;
    color: #fff;
    width: 90%;

    &>h1{
        font-size: 35px;
        margin-bottom: 20px;
        z-index: 1;
    }

    &>p{
        text-align: justify;
        z-index: 1;
    }

    @media (max-width: 970px){
        width: 90%;
    }

    @media (max-width: 800px){
        width: 95%;
    }

    @media (max-width: 560px){
        width: 85%;
    }

    @media (max-width: 400px){
        width: 70%;
    }

    @media (max-width: 360px){
        width: 85%;
    }

`;

export default Inicio;
