import React from 'react';
import CreateAccount from './CreateAccount';
import SignIn from './SignIn';
import { Breadcrumb } from 'react-bootstrap';

function Login() { 

  return (<div className="row">
            <div className='col-12 container-breadcrumb'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                        <Breadcrumb.Item active>LOGIN</Breadcrumb.Item>
                    </Breadcrumb>
            </div>
            <div className='col-12 container-specific-content'>
              <div className='row'>
                  <div className="col-12 col-lg-6"><SignIn/></div>
                  <div className="col-12 col-lg-6"><CreateAccount/></div>
              </div>
            </div>
          </div>);  
}; 

export default Login;