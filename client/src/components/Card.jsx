import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Card = () => {
  

  return (
    <div>
          <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <div className="col-lg-8">
            <h1>Welcome to <span>Your World</span></h1>
            <h2> Do you want sharing amazing adresses with your network ?</h2> 
            <h2 style={{color:'#cda45e'}}> Do you want sharing amazing moments with your beloved ones?</h2>
            <h2>This is the place !!!!!</h2>
            <div className="btns">
              <Link className="btn-book animated fadeInUp scrollto" to={'/login'}> Book a Trip </Link>
              <Link className="btn-menu animated fadeInUp scrollto" to={'/trips'} >
                      Your Catalog
              </Link>
              <Link className="btn-book animated fadeInUp scrollto" to={'/trips/new'}> Add a Trip </Link>
            </div>
            <div style={{ margin:'20px' }}>
            <p style={{color:'white'}} >Prepare yourself to discover landscapes 
            <span style={{color:'#cda45e'}} > that will take your breath away!! </span> </p> 
            </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="./images/pexels-rawfilm-stock-footage-3569294-3840x2160-24fps.mp4" className="glightbox play-btn"></a>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Card