import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { Link, useNavigate  } from 'react-router-dom'
import { UserContext } from '../context/UserContextProvider';
import logo2 from '../assets/logo2.png'


const Login = ( {setIsLoggedIn} ) => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(state);
    state.user && navigate('/books');
  }, [state.user, navigate]);

  const changeHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: undefined,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Email validation
    if (!userInfo.email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      formIsValid = false;
      newErrors.email = 'Invalid email address';
    }

    // Password validation
    if (!userInfo.password) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    } else if (userInfo.password.length < 8) {
      formIsValid = false;
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);
    return formIsValid;
  };
  
// Function to submit login inputs
  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post('http://localhost:8000/api/users/login', userInfo, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: 'SET_USER',
            payload: res.data.user,
          });
          setIsLoggedIn(true);
          console.log(state);
          // navigate('/');
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response && err.response.data && err.response.data.errors) {
            setErrors(err.response.data.errors);
          } else {
            setErrors({ server: 'An error occurred. Please try again later.' });
          }
        });
    }
  };
  return (
    <div className='container' style={{overflow:'hidden'}}>
        <nav role="navigation">
                <div className=" text-center border-bottom">
                <Link to={'/'} style={{textDecoration:'none'}} > 
                  <img src={logo2} alt="" className="invert" style={{width:'50px', height:'50px'}} />
                  <p style={{color:'#cda45e'}} >Your Magic Trip</p> 
                </Link>
                </div>
        </nav>
        <section class="vh-100 overflow-hidden">
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-7 col-lg-4 col-xl-4 offset-xl-1">
                <img src="https://images.pexels.com/photos/3020615/pexels-photo-3020615.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="beach"
                  className="img-fluid" />
              </div>
                  {/* Form to login  */}
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form onSubmit={submitHandler}>
                      <h3 className="text-center">Login</h3>
                      <div className="form-outline mb-4">
                        <label className="form-label">Email:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={userInfo.email}
                          onChange={changeHandler}
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                      </div>
                      <div className="form-outline mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={userInfo.password}
                          onChange={changeHandler}
                        />
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                      </div>
                      {errors.server && <p className="text-danger">{errors.server}</p>}
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary mt-3">
                          Login
                        </button>
                      </div>
                    </form>
              </div>
          </div>
        </div>
      </section>  
    </div>
  )
}

export default Login