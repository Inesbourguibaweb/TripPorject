import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import logo2 from '../assets/logo2.png'


const TripDetail = () => {
  const [Trip, setTrip] = useState({});
  const [trigger, setTrigger] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Trips/${id}`)
      .then((res) => {
        console.log(res.data);
        setTrip(res.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);

  return (
    <div style={{ background: "rgba(205, 164, 94, 0.6)"}}>
         <nav role="navigation">
        <div className="py-3 text-center border-bottom">
        <Link to={'/'} style={{textDecoration:'none'}} > 
          <img src={logo2} alt="" style={{width:'50px', height:'50px'}} />
          <p style={{color:'#cda45e'}} >Your Magic Trip</p> 
          </Link>
        </div>
      </nav>
      <div style={{display:'flex', justifyContent:'center'}}>
            <img className="card-img-top" 
              style={{borderRadius:'30px', width:'400px',padding:'20px', height:'400px'}} 
              src={Trip.urlImage} alt={Trip.TripName}  
              />
              <div style={{ width:'400px', height:'360px',  padding:'20px', borderRadius:'30px'}} >
                <div className="card-body" 
                style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
                 backgroundColor:"rgba(255, 255, 255, 0.7)",
                  borderRadius:'30px', height:'360px'}}>
                  <h1 className="card-title">{Trip.TripName}</h1>
                  <h2 className="card-title">{Trip.country}</h2>
                  <p className="card-text" style={{backgroundColor:"rgba(205, 164, 94, 0.7)" , 
                  width:'300px', 
                  marginRight:'5px',
                  borderRadius:'30px'
                  }}>{Trip.memories}</p>
                  <p className="card-text">Cost: {Trip.cost} $</p>
                  <a href="#" className="btn btn-primary">Add to my favorites</a>
                  <div className="card-footer text-muted">
                    {Trip.createdAt}
                  </div>
                </div>
      </div>
        
        </div>
    
    </div>
  );
};
export default TripDetail;
