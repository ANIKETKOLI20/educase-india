import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import User from '../User'; 

function SignUp() {
  const [getEmail, setEmail] = useState(true);
  const [email, setEmailValue] = useState('');
  const [password, setPasswordValue] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showError, setShowError] = useState(false);

  const emailInput = event => {
    const emailFirst = event.target.value;
    setEmailValue(emailFirst);
  };

  const passInput = event => {
    const passFirst = event.target.value;
    setPasswordValue(passFirst);
  };

  const companyInput = event => {
    const companyInput = event.target.value;
    setCompany(companyInput);
  };

  const submittedForm = event => {
    event.preventDefault();

    if (email === "" || password === "") {
      setShowError(true);
    } else {
      setEmail(false);
    }
  };

  const history = useHistory();

  const handleSignup = event => {
    event.preventDefault();
    history.push('/user');
  };
  
  return (
    <div className='signup-container'>
      <h1>
        Sign in to your<br />
        PopX account
      </h1>
      <p className='home-para'>
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit.
      </p>
      {getEmail ? (
        <form onSubmit={submittedForm}>
          <div className='input-element-container'>
          <div className="input-container">
            <input type="email" id="email" required autoComplete='off' placeholder='Enter email address' onChange={emailInput} />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="input-container">
            <input type="password" id="pass" required placeholder='Enter password' onChange={passInput} />
            <label htmlFor="pass">Password</label>
          </div>
          <button type='submit' className='login-button-for-signup'>Login</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
          <div className="input-container">
            <input type="email" id="email-two" required autoComplete='off' placeholder='Enter email address' defaultValue={email}  />
            <label htmlFor="email-two">Email Address<span className='span'>*</span></label>
          </div>
          <div className="input-container">
            <input type="password" id="password" required autoComplete='off' placeholder='Enter Password' defaultValue={password} />
            <label htmlFor="password">Password<span className='span'>*</span></label>
          </div>
          <div className="input-container">
            <input type="text" id="name" required autoComplete='off' placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
            <label htmlFor="name">Full Name<span className='span'>*</span></label>
          </div>
          <div className="input-container">
            <input type="text" id="number" required autoComplete='off' placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)} />
            <label htmlFor="number">Phone number<span className='span'>*</span></label>
          </div>
          <div className="input-container">
            <input type="text" id="company"  autoComplete='off' placeholder='Company name' onChange={companyInput} />
            <label htmlFor="company">Company name</label>
          </div>
          <button type='submit' className='create-button-signup'>Create Account</button>
        </form>
      )}
      {showError && (
        <div className="error-popup">
          <p>Please enter all required information.</p>
          <button onClick={() => setShowError(false)}>Close</button>
        </div>
      )}
      
    </div>
  );
}

export default SignUp;
