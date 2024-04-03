import { Outlet, Link } from "react-router-dom";


const Layout = () =>{
    return <div>
        <nav className="bt-0">
            

            <details>
            <summary>☰</summary>


                <p >
                    <Link to="/" ><button>🏡</button></Link>
                </p>
                <p>
                    <Link to="/about"><button>🎫Jsx</button></Link>
                </p>
                <p>
                    <Link to="/dashboard"><button>⚛️ React</button></Link>
                </p>

                
            </details> 

            
        </nav>
        
        <Outlet />
    </div>
}


export default Layout;