import React,{useState,useRef,useEffect} from 'react';
import img from '../images/logo.png';
import imagen from '../images/vectorInicio.png';
import { Transition } from 'react-transition-group';
import { ContenedorInicio,ContenedorX,ContenedorImagen,Article,Contenido,Pa } from '../styles/estilos';

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

const Inicio = () => {

    const [inProp,setInProp] = useState(false);
    const elementos = useRef();

    useEffect(() => {
        const handleTransition = () => {
            const elemen = elementos.current;
            const agregar = elemen.getBoundingClientRect().y;
            
            if(agregar>500){
                setInProp(true);
            }
        }
        window.addEventListener('scroll',handleTransition);
    });

    return (
        <ContenedorInicio>
            <ContenedorX>
                <ContenedorImagen>
                    <img src={img} />
                    <p>Mente creativa, vida creativa</p>
                </ContenedorImagen>
                <Article ref={elementos}>
                    <Transition in={inProp} timeout={duration}>
                        {state => (
                            <Contenido style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <Pa>
                                    Este proyecto está creado para ayudar a todas las personas a
                                    desarrollar la creatividad, esta habilidad es tan 
                                    importante para crear nuevas ideas y solucionar problemas
                                    en cualquier industria y que actualmente no le hemos dado 
                                    la importancia que debería tener, es por eso que nuestro 
                                    objetivo es dar información acerca de la creatividad, 
                                    consejos de cómo es que podemos aumentar la creatividad 
                                    e incluir juegos para el desarrollo de la creatividad.
                                </Pa>
                                <img src={imagen}></img>
                            </Contenido>
                        )}
                    </Transition>
                </Article>
            </ContenedorX>
        </ContenedorInicio>
    );
}

export default Inicio;