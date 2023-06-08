import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import cover from '../assets/cover.mp4'
import Navbar from "./Navbar";


const Welcome = () => {
  return (
    <div className="welcome" >
      <Navbar/>
      <div className="overlay"></div>
      <video className="videoWelcom"  src={cover} autoPlay loop muted />
      <div className="content">
            <h1>Welcome to <span>Your Trip</span></h1>
            <h2> Do you want sharing amazing adresses with your network ?</h2>
            <h2 style={{color:'#cda45e'}}> Do you want sharing amazing moments with your beloved ones?</h2>
            <h1>This is the place </h1>
      </div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start" 
          data-aos="zoom-in" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Your Trip</span></h1>
              <h2> Do you want sharing amazing adresses with your network ?</h2>
              <h2 style={{color:'#cda45e'}}>
                Do you want sharing amazing moments with your beloved ones?
              </h2>
              <h1>This is the place </h1>
                  
              <div className="btns">
                  
                <Link className="btn-menu animated fadeInUp scrollto" to={'/trips'} >Our Catalog</Link>
                <Link className="btn-book animated fadeInUp scrollto" to={'/login'}> Book a Trip </Link>
                <Link className="btn-book animated fadeInUp scrollto" to={'/login'}> Add a Trip </Link>
              </div>
              <div style={{ margin:'20px' }}>
                <p style={{color:'white'}} >Prepare yourself to discover landscapes 
                  <span style={{color:'#cda45e'}} > that will take your breath away!! </span> 
                </p> 
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
              <Link to={'/freedom'} className="glightbox play-btn" >
              </Link>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}
export default Welcome