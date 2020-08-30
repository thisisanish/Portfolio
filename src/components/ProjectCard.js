import React from 'react'

const ProjectCard = ({projTitle, projImage, projBody, gitLink, hostLink}) => {
    return (
         
            <div className="col" style={{ marginBottom:"1rem"}}>
                    <div className="card shadow" style={{borderRadius:"10px", width:"18rem"}}>
                        <img src="Avatar.png" alt="" width="100%" height="auto" />
                        <div className="card-body">
                            <h3 className="card-title text-dark">
                                {projTitle }
                            </h3>
                            <p>{projBody}</p>
                        </div>
                        <div className="card-body" style={{display:"flex", justifyContent:"space-evenly"}}>
                            <button className="btn btn-secondary " style={{display:hostLink?"block":"none"}}>
                                <a target="_blank" rel="noopener noreferrer" href={hostLink}><i className="fa fa-globe" aria-hidden="true"></i> Live Project</a>
                            </button>
                            <button className="btn btn-secondary"  style={{display:gitLink?"block":"none"}}>
                                <a target="_blank" rel="noopener noreferrer" href={gitLink}><i className="fa fa-github " aria-hidden="true"></i> GitHub</a>
                            </button>
                            
                        </div>
                    </div>
                </div>




                
         

    )
}

export default ProjectCard
