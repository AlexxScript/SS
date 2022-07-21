import React, {useRef,useState,useEffect} from "react";
import ImagenInfo from '../images/ImagenInfo.png';
import creatividad1 from '../images/IMGcreatividadInfo.png';
import creatividad2 from '../images/IMGcreatividadInfo2.png';
import infografia from '../images/infografia.png';
import mapa from '../images/mapa.png';
import { ContenedorInformacion, Article, IMG, P, Ul } from '../styles/estilos.js';
import { Transition } from "react-transition-group";

const duration = 800;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};


function Informacion() {

    const[inProp,setInProp] = useState(false);
    const elemento = useRef();

    useEffect(()=>{
        const handleTransition = () => {
            const elemen = elemento.current;
            const agregar = elemen.getBoundingClientRect().y;
            console.log(agregar)
            if(agregar < 929){
                setInProp(true)
            }

        }
        handleTransition();
        window.addEventListener('scroll',handleTransition);
    });

    return ( 
        <ContenedorInformacion>
            <IMG src={ImagenInfo} />
            <Article>
                <div className='seccion' ref={elemento}>
                <Transition in={inProp} timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                    }}>
                            <P>La imaginación y pensamientos creativos han dado como resultado la ciencia, arte y civilización; a ciencia cierta no sabemos que es hace que una persona sea creativa 
                                y ni siquiera la respuesta a qué es la creatividad. La creatividad es una característica cualitativa. La creatividad es mucho más 
                                que fórmulas y técnicas, ha sido definida como una propiedad autónoma  de nuestro increíblemente complejo cerebro, el cerebro es
                                tal vez el área más compleja de investigación científica, un área que es maravillosa.<br/>
                            </P>
                            <P>
                                Actualmente la creatividad está viviendo una de sus épocas más importantes, en conferencias sobre gran cantidad de temas se considera oportuno incluir una sesión sobre 
                                la creatividad, investigadores pertenecientes a todo tipo de disciplinas publican cada año cientos de libros y artículos sobre el tema, los libros como lo son de administración
                                y desarrollo personal incluyen ya capítulos sobre creatividad, cada vez se ofrecen más programa para incrementar la creatividad, grandes empresas y compañías han reconocido 
                                los rendimientos en el desarrollo de la creatividad.
                            </P>
                            <P>
                                Todos somos creativos y potencialmente muy creativos, perdemos mucho de nuestra creatividad durante los años de la escuela, para la
                                mayoría de los adultos ser creativo no significa  sino recuperar algunas habilidades olvidadas, sea cual sea el tiempo que haya 
                                pasado, el reaprendizaje de nuestra creatividad infantil tiene que ver más con la confianza que se tiene aquella persona que con 
                                alguna habilidad especial, se trata de estimular y explotar lo que ya está ahí.
                            </P>
                        </div>
                    )}
                </Transition>
                </div>
                <img className="imagenes" src={creatividad1}/>
                <div className='seccion'>
                    <h1>GENES</h1>
                    <P>
                        Aunque hubiese un elemento genético, como lo es en el caso de la inteligencia, pocos estaría de acuerdo en que sería un factor
                        determinante, artistas de la historia fueron educados en un lugar doméstico privado de talento musical, lo que queremos decir 
                        es que el genio fue producto del desarrollo sea cual sea la naturaleza. Al igual con los avances científicos normalmente son 
                        resultado de años de arduo trabajo en campos específicos y hay muy pocas evidencias de que tengan un origen mental genético,
                        en muchos personajes históricos no fueron niños dotados, es prácticamente imposible reconocer a muchos de los más grandes genios 
                        creativos de la historia basándonos en rendimiento y calificaciones escolares. 
                    </P>
                </div>
                <div className='seccion'>
                    <h1>Concepto</h1>
                    <P>
                        Hablando sobre la definición de la creatividad, la historia nos ha traído cientos de definiciones de creatividad pero ninguna 
                        ha adquirido popularidad. Las características de la creatividad tampoco toman en cuenta nuestro entorno, sea este
                        una organización o cultura a la que pertenecemos. 
                        Conforme consideremos las definiciones de creatividad, sus características en los individuos, procesos y productos que 
                        genera, empezaremos a pensar de manera más creativa, sin esfuerzo consciente y se sentirá motivado para comprender más.
                        El hecho de acumular definiciones no significa que hemos puesto la última palabra de lo que es la creatividad, la única 
                        certeza que tenemos es que ninguna definición ha sido aceptada en los muchos campos de los conocimientos interesados en el
                        tema, sin embargo, las definiciones populares nos dan inicios de la amplitud de perspectiva que debemos de adoptar para 
                        alcanzar un entendimiento funcional y adecuado del tema y para obtener algo en el ámbito personal algunas respuestas a
                        la pregunta de qué es la creatividad es :
                    </P>
                    <Ul>
                        <li>Algo que poseen los artistas</li>
                        <li>Una manera inusual u originla de abordar problemas</li>
                        <li>La asociación de elementos cognitivos o ideas dispares</li>
                        <li>Un proceso que genera un producto</li>
                        <li>La característica que nos hace humanos</li>
                    </Ul>
                    <P>
                        Por supuesto, los defensores de la creatividad tienen sus propias definiciones, también el análisis de las definiciones puede
                        ayudar a mostrar cómo han evolucionado nuestras ideas sobre la creatividad, si nosotros quisiéramos ser más creativos 
                        podríamos formular nuestra propia definición de creatividad.
                        El pensamiento convergente y divergente: El pensamiento convergente se refiere al pensamiento lineal, lógico y de respuestas 
                        únicas, como las que se relacionan en las pruebas de instituciones académicas, El pensamiento divergente requiere de
                        respuestas múltiples en vez de respuestas únicas, innovación concreta más que conceptos abstractos o inusuales.
                    </P>
                </div>
                <img className="imagenes" src={creatividad2} /><br/><br/>
                <div className='seccion'>
                    <h1>Cerebro</h1>
                    <P>
                        El cerebro piensa por sí mismo, es un organismo autogenerador que simultáneamente moldea su entorno y es modelado por éste, 
                        no solo es el intérprete de nuestro mundo, es el creador de nuestro mundo, esta mezcla de impulsos eléctricos y reacciones 
                        químicas se encuentran en evolución y esto es importante para la creatividad.
                    </P>
                    <img className='imagenes' src={infografia} />
                    <P>
                        Las características del pensamiento creativo no han salido a la luz únicamente a través del estilo de la genialidad.
                        Una característica que parece englobar muchas otras cualidades que suelen mencionarse es “La fluidez de ideas”.
                        Algunas de sus características son:
                    </P>
                </div>
                <img className='imagenes' src={mapa} />
                <div className='seccion'>
                    <P>
                        Cómo mencionamos en un principio, la creatividad no solo se basa en técnicas, la creatividad es más que eso, la 
                        creatividad es la cualidad con la que hemos dar pasos enormes en la ciencia, arte y como civilización, Esta cualidad 
                        es más importante que nunca y se han firmado cosas extraordinarias sobre su papel en el desarrollo del siglo XXI, 
                        la creatividad es un tema que se ha analizado por años y que aún no cuenta con una definición concreta, no tenemos que 
                        emular grandes talento genéticos sino sencillos estilos de pensamiento y actitudes que nos harán más creativos. 
                        La creatividad es importante y cada vez lo es más y su importancia en instituciones, culturas y en el crecimiento 
                        económico global, ha sido reconocido sin lugar a dudas, sea cual sea su impacto en los años que vienen, vale la pena 
                        reflexionar sobre esta. 
                    </P>
                </div>
            </Article>
        </ContenedorInformacion>
    );
}

export default Informacion;