import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const Navigation = () => {
    return (            
        <div>
            <nav className="navbar shadow navbar-expand-sm navbar-light bg-white">

                <Link className="navbar-brand md0 h1  text-bold" to='/' style={{fontSize:"2rem"}}>Anish Agarwal</Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#main-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="main-nav">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/certifications">Certifications</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/resume">Resume</NavLink>
                        </li>
                        
                    </ul>
                </div>                
                
            </nav>
        </div>
    )


}

export default Navigation
