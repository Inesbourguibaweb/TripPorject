import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const DisplayTrips = () => {
  const [trips, settrips] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/trips")
      .then((res) => {
        console.log(res.data);
        settrips(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Delete a trip
  const deletetrip = (tripId) => {
    axios
      .delete("http://localhost:8000/api/trips/" + tripId)
      .then((res) => {
        settrips(trips.filter((trip) => trip._id !== tripId));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', margin:'5px'}} >
      {trips.map((trip, index) => (
          <div key={index} className="card" style={{width: "18rem", background: "rgba(205, 164, 94, 0.6)", margin:'5px'}}>
            <img className=".rounded-circle" src={trip.urlImage} alt={trip.TripName}/>
            <div className="card-body">
              <h5 className="card-title" style={{backgroundColor:"rgba(255, 255, 255, 0.7)"}}>{trip.TripName}</h5>
              <p className="card-text" style={{backgroundColor:"rgba(205, 164, 94, 0.7)"}}>{trip.memories}</p>
              <Link
              to={"/trips/" + trip._id}
              className="btn btn-primary active"
              role="button"
              aria-pressed="true"
            >
              Dive !
            </Link>
            <button onClick={e =>deletetrip(trip._id)} > Delete this trip </button>
          </div>
          </div>
      ))}
    </div>
  );
};

export default DisplayTrips;
