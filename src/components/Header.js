import React from 'react'
import logo from "../images/kyoani_logo.jpg"

const Header = ({ data }) => {
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";
    link.click();
  };

  return (
    <>
      <section className='p-3 bg-white text-dark shadow mb-4'>
        <div className="row align-items-center">
          <div className="col-md-1">
            <a href="/kyoanitierlist">
              <img src={logo}
                className="img-fluid smaller m-0" alt="">
              </img>
            </a>
          </div>
          <div className="col-md-10">
            <h1>KyoAni Grills Tier List</h1>
            <div className="container bg-white text-dark">
              <div className="btn-group p-3" role="group" aria-label="Basic outlined example">
                <a href="#/new" type="button" className="btn btn-outline-primary">
                  Edit List
                </a>
                <a href="#/depth" type="button" className="btn btn-outline-primary">
                  In-depth view
                </a>
                <a href="#/simple" className="btn btn-outline-primary">
                  Simplified view
                </a>
              </div>
            </div>
            <button className="btn btn-outline-secondary" onClick={() => { exportData() }}>Save Data</button>
          </div>
        </div>
      </section>

      <a href="javascript:void(0)" className="p-1" onClick={() => window.scrollTo(0, 0)}
        style={{ position: 'fixed', top: '93%', right: '2%' }}>
        <i className="bi bi-arrow-up-circle text-dark h1"></i>
      </a>
    </>
  )
}

export default Header