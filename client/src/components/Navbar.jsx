import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/logo2.png'

const Navbar = () => {
  return (
        <div id="mainNavigation">
      <nav role="navigation">
        <div className=" text-center border-bottom">
          <img src={logo2} alt="" className="invert" style={{width:'50px', height:'50px'}} />
          <p style={{color:'#cda45e'}} >Your Magic Trip</p> 
        </div>
      </nav>
      <div className="navbar-expand-md">
        <div className="navbar-dark text-center my-2">
          <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
          </button>
        </div>
        <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', margin:'10px'}} >
            
          </div> 
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page"  to={'/'}> Home </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " aria-current="page"  to={'/about'}> About </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " aria-current="page"  to={'/contactus'}>Contact us</Link>
            </li>
            <li className="loginbtn">
              <Link to='/login' className="btn-book animated fadeInUp scrollto" > Login </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar