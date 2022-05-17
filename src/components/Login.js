import React,  {Fragment} from 'react';

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
                            <div className="col-12">
                                <label className="form-label">EMAIL</label>
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row row-register">
                            <div className="col-12">
                                <label className="form-label">PASSWORD</label>
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-forgot-pss">
                                <a>Forgot your password?</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-login-button">
                                <button className="btn button-gestion" id="login-button">LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>);  
}; 

export default Login;
