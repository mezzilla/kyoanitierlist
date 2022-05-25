import React from 'react'

const Entry = ({ data, color, images }) => {
    
    return (
        <>
            {color ?
                <div className="container p-5 bg-dark text-light">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-4 text-center">
                            <img src={images[data.image]} className="img-fluid rounded small" alt=""></img>
                        </div>
                        <div className="col-md p-5">
                            <h2>{data.name} - {data.series}</h2>
                            <p className='lead'>{data.description}</p>
                        </div>
                    </div> 
                </div>
                :
                <div className="container p-5 bg-light text-dark">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                            <h2>{data.name} - {data.series}</h2>
                            <p className='lead'>{data.description}</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={images[data.image]} className="img-fluid rounded small" alt=""></img>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Entry