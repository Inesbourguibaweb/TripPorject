import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContextProvider';

const AddTrip = ({addTrip}) => {
  const { state } = useContext(UserContext);
  const navigate=useNavigate();

  useEffect(() => {
    !state.user && navigate('/');
  }, [state.user, navigate]);

  const [errors, setErrors] = useState({});

  const [trip, setTrip] = useState({
    TripName: '',
    urlImage: '',
    cost: '',
    description: '',
  });

  const changeHandler = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };


  // Add a trip
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/trips/', trip, { withCredentials: true })
      .then((res) => {
        console.log(res);
        addTrip(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.errors) {
          setErrors(err.response.data.errors);
        } else {
          console.log(err);
        }
      });
  };
  return (
    <div className="col-md-5 offset-1">
      <form onSubmit={submitHandler}>
        <h3 className="text-center">Add a New Trip</h3>
        <div className="form-group">
          <label className="form-label">Trip </label>
          <input
            type="text"
            className="form-control"
            name="TripName"
            value={trip.TripName}
            onChange={changeHandler}
          />
          {errors.TripName && (
            <p className="text-danger">{errors.TripName.message}</p>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Image:</label>
          <input
            type="text"
            className="form-control"
            name="urlImage"
            value={trip.urlImage}
            onChange={changeHandler}
          />
          {errors.urlImage && (
            <p className="text-danger">{errors.urlImage.message}</p>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Image:</label>
          <input
            type="text"
            className="form-control"
            name="cost"
            value={trip.cost}
            onChange={changeHandler}
          />
          {errors.cost && (
            <p className="text-danger">{errors.cost.message}</p>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <textarea
            type="text"
            className="form-control"
            name="description"
            rows="3"
            value={trip.description}
            onChange={changeHandler}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mt-3">
            Add a book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTrip;
