import React,  {Fragment} from 'react';
import ManagementButton from '../ManagementButton';
import ItemForm from '../ItemForm';

function Login() { 

  return (<Fragment>
            <div className="row row-title border">
                <div className="col-12">
                    <h4>SIGN IN</h4> 
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-login">
                    <form>
                        <div className="row row-register">
                            <ItemForm classCol="col-12" type="email" placeholder="" title="EMAIL"/>
                        </div>
                        <div className="row row-register">
                            <ItemForm classCol="col-12" type="password" placeholder="" title="PASSWORD"/>
                        </div>
                        <div className="row">
                            <div className="col-12 col-forgot-pss">
                                <a>Forgot your password?</a>
                            </div>
                        </div>
                        <div className="row">
                            <ManagementButton classCol="col-12 col-login-button" classBtn="button-gestion" id="login-button" value="LOGIN"/>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>);  
}; 

export default Login;
