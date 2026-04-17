import React from "react";
import "./Home.css";

const Home = () =>{
    return(
       <div className="Home-page">
             
        {/* Hero Section */}
      <section className="hero d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="display-4 fw-bold">Discover Beautiful Art</h1>
          <p className="lead">Explore paintings, sculptures & digital art</p>
          <button className="btn btn-dark mt-3">Explore Gallery</button>
        </div>
      </section>

      {/* Featured Art */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Featured Artworks</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/300/200?1" className="card-img-top" alt="art"/>
              <div className="card-body">
                <h5 className="card-title">Abstract Colors</h5>
                <p className="card-text">Modern abstract painting.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/300/200?2" className="card-img-top" alt="art"/>
              <div className="card-body">
                <h5 className="card-title">Nature Beauty</h5>
                <p className="card-text">Inspired by landscapes.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/300/200?3" className="card-img-top" alt="art"/>
              <div className="card-body">
                <h5 className="card-title">Classic Portrait</h5>
                <p className="card-text">Traditional art style.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

     

       </div>
    );
}

export default Home;