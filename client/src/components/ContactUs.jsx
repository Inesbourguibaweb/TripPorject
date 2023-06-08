import React from 'react'
import freedom from '../assets/freedom.mp4'
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='main' >
        <div className="overlay"></div> 
        
        <video className='freedomVideo' src={freedom} autoPlay loop muted />
        <div className="content" 
        >
            <nav role="navigation">
                <div className="text-center border-bottom">
                <Link to={'/'} style={{textDecoration:'none'}} > 
                <img src={logo2} alt="" className="invert" style={{width:'50px', height:'50px'}} />
                <p style={{color:'#cda45e'}} >Your Magic Trip</p> 
                </Link>
                </div>
            </nav>
            <h1>Welcome to Your Magic Trip </h1>
            <section class="mb-4">
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"/>
                                        <label for="name" className="">Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" />
                                        <label for="email" className="">Your email</label>
                                    </div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control"/>
                                        <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left">
                            <a className="addatripbtn" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Pedro, CA 94126, Ivory Coast</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+00225 01 234 567 89</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>ines.bourguiba.enit@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

                </section>
        </div>

    </div>
  )
}

export default ContactUs