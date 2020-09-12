import React from 'react'
import {Link} from 'react-router-dom'

import Base from '../Base'

const Introduction = () => {
    return (  
        <Base>
            <div className="container" style={{marginTop:"2rem",  marginBottom:"2rem"}}>
                <div className="row text-center center p-3 rounded make-it-white">
                    <div className="col col-md-6 col-xs-12 py-3">
                        <img src="Avatar.png"  alt="" height="250rem"/>
                    </div>
                    <div className="col text-left">
                        <h3>Ciao!</h3>
                        <h1 className=" ">This is <strong><u className="text-uppercase">Anish Agarwal</u></strong></h1>
                        <h2>A<strong> MERN Stack </strong>  Developer</h2>
                        {/* <h4>I do fiddle around with Python and Research</h4> */}
                        <br/>
                        <div className="row justify-align-content-stretch px-3" style={{justifyContent:"stretch"}}>
                            <div className="row">
                            <a target="_blank" style={{color:"white"}} rel="noopener noreferrer" href="https://www.linkedin.com/in/thisisanish/" title="linkedIn" className="btn btn-warning m-1 m-1 mx-3"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i> </a>
                            <a target="_blank" style={{color:"white"}} rel="noopener noreferrer" href="https://github.com/thisisanish/" title="Github" className="btn btn-warning m-1 mx-3"><i className="fa fa-github fa-2x" aria-hidden="true"></i> </a>
                            <a target="_blank" style={{color:"white"}} rel="noopener noreferrer" href = "mailto: email.anishagarwal@gmail.com"  title="email.anishagarwal@gmail.com" className="btn btn-warning m-1 mx-3"><i className="fa fa-2x fa-envelope "></i> </a>
                            <a target="_blank" style={{color:"white"}} rel="noopener noreferrer" href="https://www.instagram.com/anish__agarwal/" title="Instagram" className="btn btn-warning m-1 mx-3"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i> </a>
                            </div>                        
                        </div>
                        <br/>
                        
                        <div className="row">
                        
                            <Link to="/projects" className="btn btn-primary m-1  mx-3"  ><i className="fa fa-rocket" aria-hidden="true"></i> &nbsp; Projects</Link>   
                            <a className="btn btn-success m-1 mx-3" target="_blank" style={{color:"white"}} rel="noopener noreferrer" href="https://docs.google.com/document/d/1A7oTBB_ZWBfWyrGQvpLCZE7d0vstS75hnrtvhgGZleg/export?format=pdf"><i className="fa fa-file" aria-hidden="true"></i> &nbsp;  View Resume</a>
                        </div>                                                                  
                    </div>                    
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 ">
                        <h2 style={{textAlign:"center"}}><strong>I have worked on..</strong></h2>
                        <div className="logos test-center" style={{display:"inline-list-item", justifyContent:'space-evenly',paddingRight:"4rem", paddingLeft:"  4rem"}}>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" alt="MongoDB " width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="Express" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="React"svg width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="Node" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg" alt="Javascript" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg  " alt="Heroku" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="Git" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg" alt="Netlify" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/ubuntu/ubuntu-ar21.svg" alt="Ubuntu" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt="Bootstrap" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg" alt="Python" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/php/php-horizontal.svg" alt="Php" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" alt="Php" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/json/json-ar21.svg" alt="Php" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="Php" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/github/github-ar21.svg" alt="Php" width="auto"/>
                        <img className="shadow make-it-white rounded m-1" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg" alt="Php" width="auto"/>


                        </div>
                        
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Introduction
