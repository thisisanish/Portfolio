import React,{useEffect,useState} from 'react'

import Base from '../Base'
import CertificationCard from '../components/CertificationCard'

const Certifications = () => {

    const [certificationData, setCertificationData] = useState([])
    
    const   getData = () =>{
        fetch("https://raw.githubusercontent.com/thisisanish/Datastore-Json/master/certification.json")
        .then(res=>res.json()
            .then(d=>{
                console.log(d);
                return d
            })
            .then(data=>setCertificationData(data))
            
        )
        

        .catch(err=>console.log(err))
    }
    
    useEffect(() => {
        console.log("r");
        getData()
        


    },[setCertificationData])


    let displayCertificates = certificationData.map(element=>{
        let {title, credLink, brandName, brand} = element
        return <CertificationCard key={credLink} title={title} brandName={brandName} brand={brand} credLink={credLink}/>
    })
    return (
        <div>
            <Base title="Certifications">
                <div className="row">
                    {displayCertificates}
                </div>
            
            </Base>
        </div>
    )
}

export default Certifications
