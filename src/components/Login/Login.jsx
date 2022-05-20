import React from 'react';
import CreateAccount from './CreateAccount';
import SignIn from './SignIn';
import { Breadcrumb } from 'react-bootstrap';

function Login() { 

  return (<div className="row container-login">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Login</Breadcrumb.Item>
            </Breadcrumb>
            <div className="col-12 col-lg-6"><SignIn/></div>
            <div className="col-12 col-lg-6"><CreateAccount/></div>
        </div>);  
}; 

export default Login;