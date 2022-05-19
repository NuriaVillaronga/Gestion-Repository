import React from 'react';
import CreateAccount from './CreateAccount';
import SignIn from './SignIn';

function Login() { 

  return (<div className="row">
            <div className="col-12 col-lg-6"><SignIn/></div>
            <div className="col-12 col-lg-6"><CreateAccount/></div>
        </div>);  
}; 

export default Login;