import styled from 'styled-components';

export const P = styled.p`
    margin: 5px;
    text-align: justify;
`;

export const Pa = styled.p`
    font-size: 19px;
`;

export const ContenedorInicio = styled.div`
    display: flex;
    z-index: 0;
    box-sizing: content-box;
    background: rgb(152,207,227);
    background: linear-gradient(90deg, rgba(152,207,227,1) 0%, rgba(195,222,232,1) 100%);
    /* background: linear-gradient(270deg, rgba(145, 234, 228, 0.89) 1.25%, rgba(18, 222, 250, 0.89) 46.76%, rgba(136, 206, 255, 0.89) 100%); */
`;

//----------------------------Estilos de la ruta Inicio------------------------
export const ContenedorX = styled.div`
    /* max-width: 1000px; */
    display: grid;
    grid-template-columns: 1fr,1fr,1fr,1fr;
    grid-template-rows: 1fr,1fr,1fr;
    grid-template-areas:"img img img img"
                        "text text text text";
    margin: 0px auto 0px auto;

`;

export const ContenedorImagen = styled.div`
    display: flex;
    position: relative;
    max-width: 400px;
    max-height: 1050px;
    height: 100%;
    width: 100%;
    /* bottom: 15%; */
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

export const Article = styled.article`
    position: relative;
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

export const Contenido = styled.div`
    display: flex;
    width: 100%;

    &>p{
        text-align: justify;
    }

    &>img{
        height: 90%;
        margin: 20px;
    }

    @media (max-width: 970px){
        flex-direction: column;
        width: 90%;

        &>img{
            height: 55%;
            width: auto;
        }

    }

    
    @media(max-width: 800px){
        width: 90%;

        &>img{
            height: 90%;
            width: auto;
        }
    }

    @media (max-width: 768px){
        width: 90%;

            &>img{
                height: 90%;
                width: auto;
            }
    }

    @media (max-width: 590px){
        width: 100%;
        height: 100%;

            &>img{
                height: 40%;
                width: auto;
            }
    }

    @media (max-width: 450px){
        width: 100%;
        height: 100%;

            &>img{
                height: 40%;
                width: auto;
            }
    }

    @media (max-width: 390px){
        width: 100%;
        height: 100%;

            &>img{
                height: 30%;
                width: auto;
            }
    }

    @media (max-width: 300px){
        width: 100%;
        height: 100%;

            &>img{
                height: 20%;
                width: auto;
            }
    }
`;

//------------------Estilos ruta de informacion----------------

export const ContenedorInformacion = styled(ContenedorInicio)`
    flex-direction: column;
    font-size: 22px;

    @media(max-width: 768px){
        font-size: 19px;
    }

    @media(max-width: 590px){
        font-size: 16px;
    }
`;

export const IMG = styled.img `
    margin-top: 54px;
    width: 100%;
`;      

export const Ul = styled.ul`
    max-width: 90%;
    width: 100%;
    margin: 0px auto;
    &>li{
        text-align: justify;
    }
`;

export const Ol = styled.ol`
    max-width: 90%;
    width: 100%;
    margin: 0px auto;
    &>li{
        text-align: justify;
    }
`;

//---------------------DINAMICAS---------------------------

export const Questions = styled(Article)`
    background: #2A2D34;
    display: grid;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 10px 10px 0px #3D414B;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-template-areas:"Preguntas Respuestas"
                        "Preguntas Respuestas" ;
    
    @media(max-width: 768px){
        grid-template-areas:"Preguntas Preguntas"
                            "Respuestas Respuestas";
    }
`;

export const Lista = styled(Article)`
    margin: 20px auto 20px auto;
    &>h4{
        color: #2A2D34;
    }
    &>form{
        height: 500px;
    }
`;

export const Preguntass = styled.div`
    grid-area: Preguntas;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3,fr);
    margin: 30px 0px 0px 30px;

    &>p{
        margin-top: 20px;
        font-size: 20px;
    }

`;

export const Respuestas = styled.div`
    grid-area: Respuestas;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const Textarea = styled.textarea`
    margin: 30px auto 30px auto;
    width: 100%;
    height: 90%;
    background: #A9D4E3;
    border-radius: 7px;
    border: solid 10px #2A2D34;
    color: #2A2D34;
    font-size: 17px;
    box-shadow: 0px 10px 20px 0px #3D414B;
    padding: 13px;
`;


//--------------------FOOTER-------------------
export const ContenedorFooter = styled.footer`
    background: #FFFFFF;
    opacity: 0.7;
`;

export const ContenidoFooter = styled(Article)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: space-between;
    color: #2A2D34;

    @media(max-width: 768px){
        grid-template-columns: repeat(1,1fr);
    }
`;

export const ContenidosHijos = styled.div`
    margin-bottom: 20px; 
    padding: 15px;
    &>h1{
        margin: 20px 0px;
    }
    &>p{
        margin: 10px 0px; 
        text-align: justify;
    }
    &>a{
        margin: 5px 0px;
        display: block;
        font-size: 18px;
        color: #2A2D34;
        text-decoration: none;
    }
    &>a:hover{
        color: #99cfe3;
    }
`;