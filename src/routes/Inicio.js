import React,{useState,useRef,useEffect} from 'react';
import img from '../images/logo.png';
import imagen from '../images/vectorInicio.png';
import { Transition } from 'react-transition-group';
import { ContenedorInicio,ContenedorX,ContenedorImagen,Article,Contenido } from '../styles/estilos';

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
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis.
                                    Eleifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. E
                                    leifend neque, pretium gravida urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tortor sed aliquet pulvinar elit egestas tempor velit commodo turpis. Eleifend neque, pretium gravida 
                                    urna. Auctor commodo pharetra sed vivamus eleifend neque.Lorem ipsum dolor sit amet, consectetur 
                                </p>
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