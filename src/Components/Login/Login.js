import React, { useState, useContext } from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import gIcon from './google.png';

// Import from LoginManager
import { handleGoogleSignIn} from './LoginManager';


const Login = () => {


  //User Account
  const [newUser, SetNewUSer] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    success: false,
  });

const [error, setError] = useState("")

  // Context from app
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  const history = useHistory();
  const location = useLocation();


  const { from } = location.state || {from: { pathname: '/' }};

  // Google Sign In/Up
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => handleResponse(res, true));
  };
 
  const handleResponse = (res, redirect) => { 
    if (res.error) {
      newUser && setError(res.error)
      !newUser && setError(res.error)
    } else {
        setUser(res);
        setLoggedInUser(res);
        // storeAuthToken();
        redirect && history.replace(from);
        newUser && setError("")
        !newUser && setError("")
    }
}



  return (
    <div text-center>
       <div className='social-login text-center'>
                <button className ="btn btn-light google" onClick={googleSignIn}>
                  <img align="left" src={gIcon} alt='google icon' />{' '}
                  <span>Continue with Google</span>
                </button>
      </div>
    </div>
  );
};

export default Login;