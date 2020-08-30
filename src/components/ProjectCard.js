import React from 'react'

const ProjectCard = ({projTitle, projImage = "https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg", projBody, gitLink, hostLink}) => {
    // projImage =  "https://i.imgur.com/qgNPFEx.png"
  
    return (
         
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" style={{ marginBottom:"1rem"}}>
                    <div className="card shadow center ml-auto mr-auto" style={{borderRadius:"10px", width:"18rem"}}>
                        <img src={projImage} alt="" width="100%" height="auto" />
                        <div className="card-body">
                            <h3 className="card-title text-dark">
                                {projTitle }
                            </h3>
                            <p>{projBody}</p>
                        </div>
                        <div className="card-body" style={{display:"flex", justifyContent:"space-evenly"}}>
                            <a className="btn btn-danger " style={{display:hostLink?"block":"none"}} target="_blank" rel="noopener noreferrer" href={hostLink}><i className="fa fa-globe" aria-hidden="true"></i> Live Project</a>
                            
                            <a className="btn btn-warning"  style={{display:gitLink?"block":"none"}} target="_blank" rel="noopener noreferrer" href={gitLink}><i className="fa fa-github " aria-hidden="true"></i> GitHub</a>
                            
                            
                        </div>
                    </div>
                </div>




                
         

    )
}

export default ProjectCard
