import React from 'react'

import Navigation from './components/Navigation'

const Base = ({
    title,
    className,
    children
}) => {
    return (
        <div className="base">
            <Navigation/>
            <div className="container">
            <h1 className="display-4  rounded" style={{marginTop:"5rem", marginBottom:"1rem",fontWeight:"bolder" }}><u>{title}</u></h1> 
            <hr style={{marginBottom:"3rem", color:"black" ,display:title?"block":"none"}}/>
            {children}
            </div>
            
            
        </div>
    )
}

export default Base
