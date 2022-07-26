import { useState } from "react";
import {
        ContenedorInformacion, 
        IMG,
        Lista,
        Textarea,
        Questions,
        Preguntass,
        Respuestas
        } from "../styles/estilos";
import ImagenDinamicas from "../images/ImagenDinamicas.png";
import preguntas from "../cuestionario/Preguntas.js";
import '../App.css';
import { Link } from 'react-router-dom';

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
        },1000)

    }

    if(finalizado) return(
        <div className='final'>
            <div className="elemen">
                <h2>
                    respuestas correctas {puntuacion} de {preguntas.length}
                </h2>
                <h2>
                <Link className="linkD" to="/">Regresar</Link>
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

            <Lista>
                <h4>
                    Aquí podreas realizar una lista de como solucionar un problema de acuerdo
                    a los pasos del pensamiento <Link className="linkD" to="/consejos">creativo que vimos en la sección anterior</Link>
                </h4>
                <form>
                    <Textarea 
                        placeholder="Escribe aquí tu problema y luego tu lista de pasos ;)"></Textarea>
                </form>
            </Lista>

        </ContenedorInformacion>
    );
}
export default Dinamicas;