import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
export const Login = props => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  
    const login = () => {
      fakeAuth.authenticate(() => setRedirectToReferrer(true));
    };
  
    const  from  = props.location.state|| { from: { pathname: '/admin' } };
  console.log(props.location.state)
    if (redirectToReferrer) {
      return <Redirect to={{pathname:'/admin',from:props.location.state}}/>   }else {
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
      }
  };
  export const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    }
  };
 
