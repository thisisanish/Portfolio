import React, {useState, useEffect} from 'react'


import ProjectCard from '../components/ProjectCard'

import Base from '../Base'

const Projects = () => {
    const [projData, setProjData] = useState([])
        
    const   getData = () =>{
        fetch("https://raw.githubusercontent.com/thisisanish/test/master/project.json")
        .then(res=>res.json()
            .then(data=>setProjData(data))
            
        )
        

        .catch(err=>console.log(err))
    }
    
    useEffect(() => {
        console.log("r");
        getData()
        


    },[setProjData])
;
    const DisplayProject  = projData.map(element=>{
        let {projTitle, projImage, projBody, gitLink, hostLink} = element
        return <ProjectCard  key={projTitle } projTitle={projTitle} projBody={projBody} projImage={projImage} gitLink={gitLink} hostLink={hostLink} />
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
