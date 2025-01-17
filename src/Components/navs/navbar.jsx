import React,{useState, useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';

function Navbar() {

    const [currentpage, setCurrentpage] = useState('')
    const location = useLocation();
useEffect(() => {
    setCurrentpage(location.pathname)    
}, [location])
    var nav =
        <nav className="navbar navbar-expand-md navbar-dark nav" >
            <div className="container">
                <Link className="navbar-brand" to="/">Movie Master</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <li className={`nav-item d-flex justify-content-end ${currentpage==='/' ? 'active':'inactive'} `}>
                            <Link className="nav-link" to="/">Home <span className="sr-only" >(current)</span></Link>
                        </li>

                        <li className={`nav-item d-flex justify-content-end ${currentpage.includes('Favorites')? 'active':'inactive'} `}>
                            <Link className="nav-link" to="/Favorites/">My Favorites </Link>
                        </li>                    

                    </ul>
                </div>
            </div>
        </nav>

    return (
        nav
    )
}

export default Navbar;