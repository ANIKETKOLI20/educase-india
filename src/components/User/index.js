import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Saved from '../Saved'
import "./index.css";

function User(props) {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  return (
    <div className='user-container'>
      {isAuthenticated ? (
        <div>
          <div className='user-info'>
          <img src={user.picture} alt={user.name} className='user-profile' />
          <div className='personal'>
          <h1 className='user-name'>{user.name}</h1>
          <p>{user.email}</p>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Diam Norumy Eirmod Tempor </p>
        <button type='button'className='login-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </div>
      ): (
        <div className='user-popup'>
          <Saved/>
          <p>To Check your Profile Login from home Page</p>
          <button type='button'className='login-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}

export default User;
