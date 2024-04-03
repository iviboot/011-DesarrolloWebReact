import './assets/css/App.css';
import  Layout  from "./pages/Layout";
import  About  from "./pages/About";
import  Home  from "./pages/Home";
import  Default  from "./pages/Default";
import  Dashboard  from "./pages/Dashboard";
import { Routes, Route } from 'react-router-dom';
import logo from './assets/css/img/logo.svg';
import atom from './assets/css/img/atom.png';










function App() {
  return(


    <>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={atom} className="App-logo2" alt="logo2" />
        <h5>Hello World!!</h5>
        

      </header>
 
    </div>

    
        

      
      <div className='container'>
        
        <Routes className="">
          <Route path="/" element={<Layout />}>
            
            <Route path="about" element={<About  />} />
            
            <Route path="/" element={<Home  />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Default />} />


          </Route>
        </Routes>






       

      </div>
      
      </>



  );
}


export default App;






