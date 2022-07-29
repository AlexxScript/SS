import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import logo from '../images/logo.png';
import '../App.css';

export const Formulario = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iwqx8vp', 'template_4n767x4', form.current, 'xxw--9qXCgInEymHB')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <Container2>
            <ContenedorFormularios>
                <img src={logo} />
                    <Formulario1 ref={form} onSubmit={sendEmail}>
                        <label>Nombre</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Escriba su consulta o consejos para mejorar la página</label>
                        <textarea name="message" />
                        <input class="enviar" type="submit" value="Enviar" />
                    </Formulario1>
            </ContenedorFormularios>
        </Container2>
    );
};

const Container2 = styled.div`
    padding: 70px 0px;
    background: linear-gradient(90deg, rgba(152,207,227,1) 0%, rgba(195,222,232,1) 100%);
    color: #2F2E41;
`;

const ContenedorFormularios = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 858px;
    max-height: 700px;
    width: 100%;
    height: 100%;
    margin: 0px auto;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    &>img{
        width: 50%;
        margin: 65px auto;
    }

    @media(max-width: 768px){
        max-width: 700px;
        width: 80%;
    }

`;

const Formulario1 = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 750px;
    width: 100%;
    height: 500px;
    margin: 0px auto;
    
    &>label{
        margin: 5px 0px;
    }
    &>input{        
        padding: 5px;
        margin: 10px 0px;
        border-radius: 5px;
        height: 7%;
        border: solid 3px #98CFE3;
        outline: none;
    }
    &>textarea{
        padding: 5px;
        margin: 10px 0px;
        height: 15%;
        border-radius: 5px;
        border: solid 3px #98CFE3;
        outline: none;
        transition: all .3s;
    }

    &>input:focus{
        border: solid 3px #707788;
        transition: all .3s;
    }

    &>textarea:focus{
        border: solid 3px #707788;
        transition: all .3s;
    }

    @media(max-width: 768px){
        max-width: 700px;
        width: 80%;
    }
`;

export default Formulario;