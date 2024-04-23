import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './index.css'; 

function Home() {
  const history = useHistory();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/user'); 
    }
  }, [isAuthenticated, history]);

  const handleSignup = () => {
    history.push('/signup');
  }

  return (
    <div className='home-container'>
      <h1 className='home-heading'>Welcome to PopX</h1>
      <p className='home-para'>
        Lorem ipsum dolor sit amet,<br/>
        consectetur adipiscing elit.
      </p>
      <button type='button' className='create-button' onClick={handleSignup}>Create Account</button>
      {isAuthenticated ?  
        <button type='button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button> : 
        <button type='button' className='login-button' onClick={() => loginWithRedirect()}>
          Already Registered? Login
        </button>
      }
    </div>
  );
}

export default Home;
