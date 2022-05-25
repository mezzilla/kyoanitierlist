import './App.css';
import Entry from './components/Entry';
import Header from './components/Header';
import Data from './data.json';
import NewList from './components/NewList';
import Tierlist from './components/Tierlist';
import { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useRef } from 'react';


function App() {
  const [tier, setTier] = useState('')
  const inputFile = useRef(null)
  const [data, setData] = useState(Data)

  let color = false
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  async function test() {
    document.getElementById('file').files[0].text()
      .then(value => { setData(JSON.parse(value)); document.getElementById('load').innerHTML = 'Data updated!' })
  }

  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  return (

    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={
            <>
              <Header data={data} ></Header>
              <div className="container bg-light shadow col-5 p-4">
                <div>
                  <h4>Guide</h4>
                  <br />
                  <p>'Edit List' allows you to modify description and tier of each of the girls in the list.
                    Girls already assigned to a tier will have a green box around their image.</p>
                  <p>'In-depth view will show all the info inserted for every girl, divided by tier.
                    Use the appropriate tier button to show all the girls belonging to that tier.</p>
                  <p>'Simplified view' will show a view of the tierlist without additional information, only images.</p>
                  <p>You can freely navigate between those 3 options to check how the list is coming along.</p>
                  <p>'Save Data' will download a JSON file containing all the information you entered.</p>
                  <p>Press the top left logo to go back to this page, but <b>remember to save your data first</b>,
                  otherwise you'll lose it all.</p>
                  <p>Use the button below to select a JSON file from which to import your data, 
                    if you already have one. Otherwise, just start editing your list using the options above.</p>
                </div>
                <div className='mt-4'>
                  <input type='file' id='file' ref={inputFile} accept=".json" />
                  <div id='load' className='mt-4'></div>
                </div>
                <div className='mt-4'>
                  <button type="button" className="btn btn-outline-primary"
                    onClick={() => { test() }}>Load Data</button>
                </div>
              </div>
            </>
          }>
          </Route>

          <Route path='/new' element={
            <>
              <Header data={data}></Header>
              <NewList data={data ? data : Data} images={images}></NewList>
            </>}>
          </Route>
          <Route path='/simple' element={
            <>
              <Header data={data ? data : Data}></Header>
              <Tierlist data={data ? data : Data} images={images}></Tierlist>
            </>}></Route>

          <Route path='/depth' element={
            <>
              <Header data={data ? data : Data}></Header>
              <div className="container mb-4 shadow">
                <div className="container bg-white text-dark p-3">
                  <div className="btn-group p-3" role="group" aria-label="Basic outlined example">
                    <button id='sss' type="button" className="btn btn-outline-primary" onClick={() => { setTier('sss') }}>SSS</button>
                    <button id='s' type="button" className="btn btn-outline-primary" onClick={() => { setTier('s') }}>S</button>
                    <button id='a' type="button" className="btn btn-outline-primary" onClick={() => { setTier('a') }}>A</button>
                    <button id='b' type="button" className="btn btn-outline-primary" onClick={() => { setTier('b') }}>B</button>
                    <button id='c' type="button" className="btn btn-outline-primary" onClick={() => { setTier('c') }}>C</button>
                    <button id='d' type="button" className="btn btn-outline-primary" onClick={() => { setTier('d') }}>D</button>
                    <button id='e' type="button" className="btn btn-outline-primary" onClick={() => { setTier('e') }}>E</button>
                    <button id='f' type="button" className="btn btn-outline-primary" onClick={() => { setTier('f') }}>F</button>
                    <button id='u' type="button" className="btn btn-outline-primary" onClick={() => { setTier('unranked') }}>Unranked</button>
                  </div>
                  <h2>{tier.toUpperCase()}</h2>
                </div>
                {inputFile ? Data.map((element, index) => {
                  if (element.tier === tier) {
                    color = !color
                    return <Entry key={index} data={element} color={color} images={images}></Entry>
                  }
                }) :
                  Data.map((element, index) => {
                    if (element.tier === tier) {
                      color = !color
                      return <Entry key={index} data={element} color={color} images={images}></Entry>
                    }
                  })}
              </div>
            </>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
