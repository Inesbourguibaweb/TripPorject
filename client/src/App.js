import './App.css';
import { Route, Routes } from 'react-router-dom';
import DisplayTrip from './components/DisplayTrips';
import TripDetail from './components/TripDetail';
import AddTrip from './components/AddTrip'
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import "react-toastify/dist/ReactToastify.css";
import Card from './components/Card';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/UserContextProvider'
import axios from 'axios';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    axios.post('http://localhost:8000/api/users/isLoggedIn', {}, { withCredentials: true })
      .then((user) => {
        console.log(user.data);
        console.log("from app", state);
        dispatch({
          type: "SET_USER",
          payload: user.data
        })
        setIsLoggedIn(true)
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: "NULL_USER" })
      })
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome/> }/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/register' element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/about' element={<About/> }/>
        <Route path='/contactus' element={<ContactUs/> }/>
        <Route path='/trips' element={<DisplayTrip/>} />
        <Route path='/trips/new' element={<AddTrip/>} />
        <Route path='/trips/:id' element={<TripDetail/>} />
        <Route path='/welcome' element={<Card/>} />
      </Routes>
    </div>
  );
}

export default App;
