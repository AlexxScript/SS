import { useState } from "react";
import { Article, ContenedorInformacion, IMG } from "../styles/estilos";
import ImagenDinamicas from "../images/ImagenDinamicas.png";
import preguntas from "../cuestionario/Preguntas.js";
import styled from 'styled-components';
import '../App.css';

const Dinamicas = () => {

    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [finalizado, setFinalizado] = useState(false);

    const ejecucion = (escorrecta,e) => {

        // SI LA RESPUESTA QUE ENVIO EL USUARIO ES VERDADERA, ENTONCES SE VA A ALTERAR EL ESTADO
        if(escorrecta){
            setPuntuacion(puntuacion+1);
        }

        e.target.classList.add(escorrecta ? "btnQCorrecta" : "btnQInorrecta")

        // SI EL NUMERO DE PA ES IAGUAL A LA CANTIDAD DE PREGUNTAS MENOS 1
        // SE CAMBIARA EL ESTADO A FALSO
        

        setTimeout(()=>{
            if(preguntaActual === preguntas.length - 1){
                setFinalizado(true);
            }else{
                setPreguntaActual(preguntaActual+1);
            }
        },1500)

    }

    if(finalizado) return(
        <div className='final'>
            <div className="elemen">
                <h2>
                    respuestas correctas {puntuacion} de {preguntas.length}
                </h2>
                <h2>
                    <button className="btnQ" onClick={() => window.location.href="/dinamicas"}> ¿Desea intentarlo de nuevo? </button>
                </h2>
            </div>
            
        </div>
    );

    return(
        <ContenedorInformacion>
            <IMG src={ImagenDinamicas} />
            <Questions>

                {/* LADO DERECHO */}
                <Preguntass> 
                    <h1> Pregunta {preguntaActual + 1} de {preguntas.length} </h1>
                    <p>
                        {preguntas[preguntaActual].pregunta}
                    </p>
                    <p>
                        respuestas correctas {puntuacion} de {preguntas.length}
                    </p>
                </Preguntass>

                {/* LADO IZQUIERDO */}
                <Respuestas>
                    {preguntas[preguntaActual].opciones.map((item) => (
                        <button className="btnQ" onClick={(e)=> ejecucion (item.escorrecta,e)} key={item.respuesta}> {item.respuesta} </button>
                    ))}
                </Respuestas>

            </Questions>
        </ContenedorInformacion>
    );
}

const Questions = styled(Article)`
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
                        "Preguntas Respuestas" 
`;

const Preguntass = styled.div`
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

const Respuestas = styled.div`
    grid-area: Respuestas;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;


export default Dinamicas;