import React from 'react'
import { useState } from 'react'

const NewList = ({ data, images }) => {

    let series = getAllSeries(data)
    let currentEdit = ''
    const [edited, setEdited] = useState(true)


    function getAllSeries(data) {
        let seriesArray = []
        data.forEach(element => {
            seriesArray.push(element.series)
        })
        return [...new Set(seriesArray)].sort()
    }

    function editCharacter(data) {
        document.getElementById('form').style.display = 'block'
        currentEdit = data
        document.getElementById('name').innerHTML = currentEdit.name
        document.getElementById('serie').innerHTML = currentEdit.series
        document.getElementById('descr').value = currentEdit.description

        let temp = data.tier
        let mySelect = document.getElementById('select');

        for (let i, j = 0; i = mySelect.options[j]; j++) {
            if (i.value == temp) {
                mySelect.selectedIndex = j;
                break;
            }
        }
    }

    function saveData() {
        currentEdit.tier = document.getElementById('select').value
        currentEdit.description = document.getElementById('descr').value
        document.getElementById('descr').placeholder = ''
        document.getElementById('select').selectedIndex = 8
        document.getElementById('form').style.display = 'none'
        setEdited(!edited)
    }

    return (
        <>
        <div className="container justify-content-between text-align-center col-3 p-3 mb-4 bg-light shadow"
        id="form" style={{'display': 'none', 'position':'fixed', 'zIndex':'50', 'left':'50%', 'top':'50%', 'transform':'translate(-50%, -50%)'}}>
                <div className='p-2'>
                    <h2 id="name"></h2>
                    <h3 id="serie"></h3>
                </div>
                <div className='p-2'>
                    <h5>Description: </h5><textarea rows="5" cols="40" 
                    style={{'resize': 'none'}} className='m-1' id='descr' type="text"></textarea>
                </div>
                <div className='p-2'>
                    <h5>Tier: </h5>
                    <select name="" id="select" className='m-1'>
                        <option value="sss">SSS</option>
                        <option value="s">S</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="d">D</option>
                        <option value="e">E</option>
                        <option value="f">F</option>
                        <option value="unranked">Unranked</option>
                    </select>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-secondary m-1 mt-3"
                        onClick={() => { document.getElementById('form').style.display = 'none' }}>Cancel</button>
                    <button type="button" className="btn btn-outline-primary m-1 mt-3" onClick={() => { saveData() }}>Confirm</button>
                </div>
            </div>

        <div className="container col-md-9 shadow mb-4 ">            
            {series.map((elem, id) => {
                return <div className="row bg-white align-items-center justify-content-between border-secondary border-bottom" key={id}>
                    <div className="col-2">
                        <h3>{elem}</h3>
                    </div>
                    <div className="col" style={{ "textAlign": "left", 'minHeight': '20vh' }}>
                        {data.map((element, index) => {
                            return element.series === elem ?
                                element.tier !== "unranked" ? <><img key={index} src={images[element.image]}
                                    className="img-fluid small m-0 done" alt="" title={element.name}
                                    onClick={() => { editCharacter(element) }}></img></>
                                    : <><img key={index} src={images[element.image]}
                                        className="img-fluid small m-0 notdone" alt="" title={element.name}
                                        onClick={() => { editCharacter(element) }}></img></>
                                : null
                        })}
                    </div>
                </div>
            }
            )}
        </div>
        </>
    )
}

export default NewList