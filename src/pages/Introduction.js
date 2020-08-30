import React from 'react'
import {Link} from 'react-router-dom'

import Base from '../Base'

const Introduction = () => {
    return (  
        <Base>
            <div className="container" style={{marginTop:"7rem"}}>
                <div className="row text-center center ">
                    <div className="col col-md-6 col-xs-12 p2">
                        <img src="Avatar.png" alt="" height="300rem"/>
                    </div>
                    <div className="col p-4 text-left">
                        <h3>Hola!</h3>
                        <h1 className="display-3">This is <strong><u className="text-uppercase">Anish</u></strong></h1>
                        <h2>I am a MERN Stack Developer</h2>
                        {/* <h4>I do fiddle around with Python and Research</h4> */}
                        <br/>
                        <div className="row justify-align-content-stretch px-3" style={{justifyContent:"stretch"}}>
                            <Link to="#" title="Linkedin" className="btn btn-warning mx-3"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link>
                            <Link to="#" title="Instagram" className="btn btn-warning mx-3"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></Link>
                            <Link to="#" title="Github" className="btn btn-warning mx-3"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
                            <Link to="#" title="Facebook" className="btn btn-warning mx-3 "><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></Link>
                        </div>
                        <br/>
                        <div className="col col-xs-12">
                            <Link to="/projects" className="btn btn-primary mx-3"  ><i className="fa fa-rocket" aria-hidden="true"></i> &nbsp; Projects</Link>   
                            <Link to="/"className="btn btn-success mx-3"><a target="_blank" style={{color:"white"}} rel="noopener noreferrer" href="https://docs.google.com/document/d/1A7oTBB_ZWBfWyrGQvpLCZE7d0vstS75hnrtvhgGZleg/export?format=pdf"><i className="fa fa-file" aria-hidden="true"></i> &nbsp;  View Resume</a></Link>

                        </div>
                        <div className="col col-xs-12 text-center ">
                        

                        </div>
                        
                        

                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Introduction
