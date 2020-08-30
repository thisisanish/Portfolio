import React from 'react'

import Base from '../Base'
import CertificationCard from '../components/CertificationCard'

const Certifications = () => {
    const certificationData = [
        {
            title: "Projeoject Moject Mct Management",
            brandName: "Board Infinity",
            brand: "url",
            credLink:"jcnj"
        },
        {
            title: "Project Management",
            brandName: "Board Infinity",
            brand: "google.com",
            credLink:"jcnj"
        },
        {
            title: "Project Management",
            brandName: "Board Infinity",
            brand: "url",
            credLink:"jcnj"
        }
    ]

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
