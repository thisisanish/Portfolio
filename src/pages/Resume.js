import React from 'react'

import Base from '../Base'

const Resume = () => {
    return (
        <Base title="Resume">
            <div className="text-center">
                <a className="btn col-12 btn-lg btn-primary" target="_blank" style={{color:"white", marginBottom:"2rem"}} rel="noopener noreferrer" href="https://docs.google.com/document/d/1A7oTBB_ZWBfWyrGQvpLCZE7d0vstS75hnrtvhgGZleg/edit?usp=sharing">View Resume</a>
 
                <a className="btn col-12 btn-lg btn-primary" target="_blank" style={{color:"white"}} rel="noopener noreferrer" href="https://docs.google.com/document/d/1A7oTBB_ZWBfWyrGQvpLCZE7d0vstS75hnrtvhgGZleg/export?format=pdf">Download Resume</a>
    
            </div>
            
        </Base>
    )
}

export default Resume
