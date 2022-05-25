import React from 'react'

const Tierlist = ({ data, images }) => {
    

    return (
        <div className="container shadow col-10 my-5">

                <div className="row align-items-center justify-content-between border-secondary border-bottom"
                style={{"backgroundColor": "#ff5857"}}>
                    <div className="col-2">
                        <h2>SSS</h2>
                    </div>
                    <div className="col-10 bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                    &nbsp;
                        {data.map((element, index) => {
                            if (element.tier === 'sss') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name}></img>
                            }
                        })}
                    </div>
                </div>
                <div className="row align-items-center justify-content-between border-secondary border-bottom" style={{"backgroundColor": "#ff7f7e"}}>
                    <div className="col-2">
                        <h2>S</h2>
                    </div>
                    <div className="col bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                        {data.map((element, index) => {
                            if (element.tier === 's') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name}></img>
                            }
                        })}
                    </div>
                </div>
                <div className="row align-items-center justify-content-between border-secondary border-bottom" style={{"backgroundColor": "#ffbf7f"}}>
                    <div className="col-2">
                        <h2>A</h2>
                    </div>
                    <div className="col bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                        {data.map((element, index) => {
                            if (element.tier === 'a') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name} ></img>
                            }
                        })}
                    </div>
                </div>
                <div className="row align-items-center justify-content-between border-secondary border-bottom" style={{"backgroundColor": "#feff7f"}}>
                    <div className="col-2">
                        <h2>B</h2>
                    </div>
                    <div className="col bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                        {data.map((element, index) => {
                            if (element.tier === 'b') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name}></img>
                            }
                        })}
                    </div>
                </div>
                <div className="row align-items-center justify-content-between border-secondary border-bottom" style={{"backgroundColor": "#7eff80"}}>
                    <div className="col-2">
                        <h2>C</h2>
                    </div>
                    <div className="col bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                        {data.map((element, index) => {
                            if (element.tier === 'c') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name}></img>
                            }
                        })}
                    </div>
                </div>
                <div className="row align-items-center justify-content-between border-secondary border-bottom" style={{"backgroundColor": "#7fbfff"}}>
                    <div className="col-2">
                        <h2>D</h2>
                    </div>
                    <div className="col bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                        {data.map((element, index) => {
                            if (element.tier === 'd') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name}></img>
                            }
                        })}
                    </div>
                </div>
                <div className="row align-items-center justify-content-between border-secondary border-bottom" style={{"backgroundColor": "#807fff"}}>
                    <div className="col-2">
                        <h2>E</h2>
                    </div>
                    <div className="col bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                        {data.map((element, index) => {
                            if (element.tier === 'e') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name}></img>
                            }
                        })}
                    </div>
                </div>
                <div className="row align-items-center justify-content-between border-secondary border-bottom" style={{"backgroundColor": "#ff7efd"}}>
                    <div className="col-2">
                        <h2>F</h2>
                    </div>
                    <div className="col bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                        {data.map((element, index) => {
                            if (element.tier === 'f') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name}></img>
                            }
                        })}
                    </div>
                </div>
                <div className="row align-items-center justify-content-between" style={{"backgroundColor": "gray"}}>
                    <div className="col-2">
                        <h2>Unranked</h2>
                    </div>
                    <div className="col bg-dark" style={{"textAlign": "left", 'minHeight':'20vh'}}>
                        {data.map((element, index) => {
                            if (element.tier === 'unranked') {
                                return <img key={index} src={images[element.image]}
                                className="img-fluid zoom small m-0" alt="" title={element.name}></img>
                            }
                        })}
                    </div>
                </div>
        </div>
    )
}

export default Tierlist
