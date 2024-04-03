import notes from '../assets/css/img/notes.png';
import jsx3 from '../assets/css/img/jsx3.png';
import html from '../assets/css/img/html.png';
import rjs from '../assets/css/img/rjs.png';



const About = () =>{
    return(
         
         <>
         <h1>
            <img  src={notes} className='notes' alt=''/>
             JSX
         </h1>

         <p>JSX (JavaScript XML) es una extensión sintáctica para JavaScript que permite a los desarrolladores escribir código similar al HTML dentro de un archivo 
            JavaScript. Fue desarrollada por Meta (antes Facebook).
            La sintaxis de JSX se parece a la de HTML, con etiquetas de apertura y cierre, atributos y elementos anidados.
            Por ejemplo, podrías escribir el siguiente código JSX para representar un simple elemento de encabezamiento:
         </p>
         <p>
         JSX se transforma en JavaScript normal antes de ejecutarse en el navegador. Esta transformación se realiza mediante una herramienta llamada transpilador. 
         El transpilador más popular para JSX es Babel.

         Babel transforma el código JSX en una serie de llamadas a funciones. Estas llamadas a funciones son equivalentes al código HTML escrito en JSX. El navegador puede 
         
         entonces ejecutar el código JavaScript resultante.
         </p>
        <img src={jsx3} className='img2' alt=''/>
        <p>
           En la imagen se observa como está estructurado el 🎫Jsx.        </p>
        <img src={html} className='htmli'alt=''/>
        <p>
            En esta otra imagen observamos la estructura  🌐HTML.
        </p>
        <p>
          JSX es una extensión de sintaxis de JavaScript que nos permite mezclar JS y HTML (XML), de ahí su nombre JavaScript XML.
          Esta extensión nos facilita la vida pues nos permite escribir un código más limpio, sin tantas repeticiones (DRY), y con muy pocos factores o condiciones a tener en cuenta.
        </p>



        <footer>
            <p>
                <em>Fuente web:</em>
            </p>
            <a href='https://legacy.reactjs.org/docs/introducing-jsx.html'> 
               <img src={rjs} className='React2' alt=''/><em><strong>React</strong></em>
            </a>
        </footer>







         </>
         );
}

export default About;