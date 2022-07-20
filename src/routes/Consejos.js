import React from "react";
import styled from "styled-components";
import { Article, ContenedorInformacion, IMG } from "../styles/estilos";
import imagentips from '../images/dibujoTips.png';

const Consejos = () => {
    return(
        <ContenedorInformacion>
            <IMG src={imagentips}/>
            <Article>
                <p>
                    Las técnicas que encontrará pretenden fomentar los procesos conocidos del pensamiento divergente o creativo. 
                    A la mayoría de las personas no les importa en qué hemisferio se encuentra su creatividad lo que les interesa 
                    es hacer uso de esta cualidad para resolver un problema o realizar un trabajo. A otros les interesa más lo que
                    pueden producir.
                </p>
                <p>
                    Los procesos pueden mostrarnos cómo ser más creativos o al menos cómo empezar a serlo, mientras más comprendamos nuestra
                    propia creatividad más creativos nos volveremos, este proceso es un conjunto de etapas o fases ordenadas de manera secuencial 
                    para desarrollar el pensamiento creativo.
                </p>
                <Ul>
                    <li>El cuestionamiento:  Es el interés profundo de un tema dado, se descubre un problema.</li>
                    <li>Acopio de datos: La persona recolecta toda la información relevante de acuerdo al interés o problema planteado.</li>
                    <li>
                        Incubación: Consiste en alejarse temporalmente del problema o situaciones que nos ocupa, con el fin de que “maduren” 
                        las ideas y se pueda promover el trabajo inconsciente para que se generen las ideas de manera natural.
                    </li>
                    <li>Es la ocurrencia intuitiva de la persona de una solución o posibilidad</li>
                    <li>Elaboración:Se verifica la idea de la hipótesis u ocurrencia.</li>
                    <li>Publicación: Se da a conocer la idea a otros para que sea conocida.</li>
                </Ul>
                <h1>Algunas técnicas para fomentar la creatividad son: </h1>
                <p>
                    La lluvia de ideas en la cual partimos de la nada y al pensar al azar se generan ideas que nos llevarán con claridad a 
                    nuestro objetivo, cuanto más grande sea el número de asociaciones y menos estereotipadas  sean las ideas, más creativas 
                    serán las soluciones del problema, para que esta técnica sea lo más eficiente posible debemos de:
                </p>
                <Ul>
                    <li>Plantear el problema de manera clara y breve</li>
                    <li>No criticar las ideas aportadas</li>
                    <li>Establecer un sistema para la anotación de ideas</li>
                    <li>Aprovechar las derivaciones de las ideas iniciales</li>
                    <li>Retroalimentar a los participantes en la sesión sobre los resultados obtenidos</li>
                </Ul>
                <p>
                    Crear listas de verificación que consiste en registrar asuntos referidos a un producto, servicio o proceso que nos pueden 
                    arrojar nuevos puntos de vista.
                    Hacer mapas mentales ayuda a nuestro cerebro aprovechar su máximo potencial ya que este método nos permite organizar nuestros 
                    pensamientos , son una forma sencilla de gestionar y planificar toda la información de nuestro cerebro.<br/>
                    Se propone una serie de pasos para realizar un mapa mental estos son los siguientes:
                </p>
                <Ol>
                    <li>Empieza en el centro de una hoja, esto te va a permitir moverte libremente hacia cualquier dirección</li>
                    <li>Dibuja una imagen que representa la idea principal</li>
                    <li>Hacer uso de múltiples colores estimulara al cerebro, además de aportar interés y diversión en el mapa</li>
                    <li>A partir de la imagen central crea ramificaciones con las ideas importantes</li>
                    <li>Utiliza líneas curvas ya que el cerebro las percibe con más facilidad</li>
                    <li>Haz uso de una única palabra clave por línea ya que permite asociarla con frases</li>
                    <li>De preferencia utiliza imágenes ya que permiten englobar muchos más conceptos</li>
                </Ol>
            </Article>
        </ContenedorInformacion>
    );
}

const Ul = styled.ul`
    max-width: 90%;
    width: 100%;
    margin: 0px auto;
`;

const Ol = styled.ol`
    max-width: 90%;
    width: 100%;
    margin: 0px auto;
`;

export default Consejos;