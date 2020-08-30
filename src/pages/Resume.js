import React from 'react'

import Base from '../Base'

const Resume = () => {
    return (
        <Base title="Resume">
            <div className="text-center">
                <button className="btn btn-lg btn-primary"><a target="_blank" style={{color:"white"}} rel="noopener noreferrer" href="https://docs.google.com/document/d/1A7oTBB_ZWBfWyrGQvpLCZE7d0vstS75hnrtvhgGZleg/export?format=pdf">View Resume</a></button>
            </div>
            
        </Base>
    )
}

export default Resume
