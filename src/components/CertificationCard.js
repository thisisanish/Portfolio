import React from 'react'

const CertificationCard = ({brand, brandName, title, credLink}) => {
console.log(brand);
    return (
        <div className=" col-md-12 col-lg-6 col-sm-12 col-xs-12" style={{marginBottom:"1rem"}}>
            <div className="card shadow" style={{padding:"5%", borderRadius:"10px"}}>
                <div className="row">
                    <div className="card col-2" style={{padding:"0px", borderColor:"white"}}>
                        <img src={brand} height="auto" width="100%" alt=""/>
                    </div>
                    <div className="col">
                        <h2>{title}</h2>
                        <h5>{brandName}</h5>
                        <a className="btn btn-primary" rel="noopener noreferrer" target="_blank" href={credLink} style={{color:"white"}}> View Credentials &nbsp; <i className="fa fa-external-link"></i> </a>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default CertificationCard
