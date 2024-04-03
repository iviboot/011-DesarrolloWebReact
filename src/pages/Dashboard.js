import rjs from '../assets/css/img/rjs.png';
import imagenes from '../assets/css/img/imagenes.jpg';

const Dashboard = () =>{
    return(
        <>
         <h1>
          <img src={rjs} className="" alt=""/>
            React
         </h1> 
         <p>
            Esta librería fue lanzada en el año 2013 y desarrollada por Facebook, quienes también la mantienen actualmente junto a una comunidad de desarrolladores independientes y compañías. 
            Hoy en día muchas empresas de primer nivel utilizan ReactJS para el desarrollo de sus aplicaciones, y es que entre ellas podemos encontrar Facebook, Instagram y el cliente web de WhatsApp, y
            otras como AirBnb, Uber, Netflix, Twitter, Reddit o Paypal.
         </p>
         <p>
            De esta manera, ReactJS está basado en un paradigma llamado programación orientada a componentes en el que cada componente es una pieza con la que el usuario puede interactuar. Estas piezas se crean usando una sintaxis llamada JSX permitiendo escribir 
            HTML (y opcionalmente CSS) dentro de objetos JavaScript.
         </p>
         <p>
            React no requiere usar JSX, pero la mayoría de la gente lo
            encuentra útil como ayuda visual cuando trabajan con interfaz de usuario dentro del código JavaScript. Esto también permite que React muestre mensajes de error o advertencia más útiles.


         </p>
         <p>
           React se puede utilizar para desarrollar aplicaciones de una sola página , móviles o renderizadas en servidor con marcos como Next.js. Debido a que React solo se preocupa por la interfaz de usuario
           y la representación de componentes en el DOM , las aplicaciones de React a menudo dependen de bibliotecas para el enrutamiento y otras funciones del lado del cliente. Una ventaja clave de React es que solo renderiza aquellas partes de la página que han cambiado,
           evitando la renderización innecesaria de elementos DOM sin cambios.
         </p>

          <img src={imagenes} className='imagenes1' alt=''/>

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

export default Dashboard;