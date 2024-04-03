import web from '../assets/css/img/web.png';
import webi from '../assets/css/img/webi.png';
import rjs from '../assets/css/img/rjs.png';




const Home = () => {
    return (
        <>
            <div className="content">
               
                <h1>Introducción</h1>
                <p>React.js es el marco de JavaScript de front-end más conocido. 
                    Los desarrolladores usan JSX, una combinación de HTML y 
                    JavaScript, para crear vistas de forma natural. 
                    Los desarrolladores también pueden crear componentes para 
                    bloques que se puede reutilizar en sus aplicaciones.</p>
                    
                    <h2>Qué es React?</h2>
                    <p>React es una librería de JavaScript para construir interfaces de usuario.

                       Se basa en una arquitectura de componentes, que pueden contener propiedades individuales, 
                       así como su propio estado, con lo cual se pueden reutilizar en diferentes partes de la misma interface, 
                       o incluso en interfaces diferentes.

                       React se puede renderizar en el navegador con la ayuda de otra librería llamada ReactDOM, así como también
                        del el lado del servidor a través de Node.js.

                       Además también sirve para crear aplicaciones móviles a través del framework React Native.

                       React fue concebido en el año 2011 dentro del equipo de desarrollo de Facebook, y abierto a la
                        comunidad en Mayo de 2013. Hoy en día es mantenido aún por la red social, además de una amplia comunidad de desarrolladores.
                    </p>
                    <p>
                       React tiene algunas características principales que la hacen destacar de otras librerías de JavaScript. En las siguientes secciones 
                       presentaremos estas características y te explicaremos cómo contribuyen al desarrollo de aplicaciones móviles y web.

                       La función principal de React es desarrollar páginas web de una manera gratuita y sencilla gracias a sus componentes reutilizables. 
                       Estos hacen posible usar un mismo elemento en varias partes del sitio o en otros sitios sin necesidad de volver a escribir todo el código.
                        Como resultado, los programadores web ahorran gran cantidad de tiempo y trabajo.

                       React cuenta con un óptimo desempeño que se encarga de actualizar y renderizar los cambios realizados de forma automática. Esta cualidad permite a los programadores

                       desarrollar sus códigos sin mayores contratiempos en el modelo en objetos para la representación de documentos (DOM).

                       También es sumamente funcional para personalizar tu sitio web, gracias a su gran capacidad para integrarse con otros elementos.

                       Además de la configuración de nuevas páginas web, esta librería de JavaScript sirve para crear aplicaciones móviles con la complementación del framework React Native. Y, de igual modo, para crear aplicaciones de realidad virtual con la ayuda del framework React 360.
                    </p>

                    <footer>
                        <p><em>Fuentes web:</em></p>
                        <a href="https://arielfuggini.com/introduccion-reactjs/">
                        <img src={web} className="App-logo3" alt="" />
                          <strong>Arielfuggini</strong>
                        </a>  
                        <a href='https://www.hostinger.mx/tutoriales/que-es-react'>
                         <img src={webi} className='' alt=''/>
                         <strong>Hostinger</strong>
                        </a>   
                        <a href='https://www.hostinger.mx/tutoriales/que-es-react'>
                         <img src={rjs} className='' alt=''/>
                         <strong>React</strong>
                        </a>                
                    </footer>

            </div>
        </>
    );
}

export default Home;