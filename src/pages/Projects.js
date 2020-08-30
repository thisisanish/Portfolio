import React from 'react'


import ProjectCard from '../components/ProjectCard'

import Base from '../Base'

const Projects = () => {

    const progData = 
        [
        {
            projTitle: "YelpCamp",
            projImage: "Avatar.png",
            projBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, magnam repellat autem consequatur dolores veniam sint perferendis. Dignissimos enim debitis ullam deleniti maiores id. Commodi consequuntur nihil reiciendis accusamus modi.",
 
        },
        {
            projTitle: "BlogApp",
            projImage: "Avatar.png",
            projBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, magnam repellat autem consequatur dolores veniam sint perferendis. Dignissimos enim debitis ullam deleniti maiores id. Commodi consequuntur nihil reiciendis accusamus modi.",
            gitLink: "vdvs",
            hostLink:""
        }

    ]
    
    const DisplayProject = progData.map(element=>{
        let {projTitle, projImage, projBody, gitLink, hostLink} = element
        return <ProjectCard key={projTitle} projTitle={projTitle} projBody={projBody} projImage={projImage} gitLink={gitLink} hostLink={hostLink} />
    })
    
    return(
        <Base title="Projects">
           
                <div className="row" style={{display:"flex", justifyContent:"center"}}>
                    {DisplayProject}
    
            </div>
            
        </Base>
    )
}

export default Projects
