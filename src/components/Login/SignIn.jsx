import React,  { useState, Fragment} from 'react';
import ManagementButton from '../ManagementButton';
import ItemForm from '../ItemForm';
import TitleHeader from '../TitleHeader';

function SignIn() { 

    const [email, setEmail] = useState({field:"", valid: null});  
    const [pass, setPass] = useState({field:"", valid: null});

    const regExp_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const regExp_required =/^$/;

  return (<Fragment>
            <TitleHeader title="SIGN IN"/>
            <div className="row">
                <div className="col-12 col-login">
                    <form>
                        <div className="row row-register">
                            <ItemForm classCol="col-12" type="email" placeholder="" title="EMAIL" status={email} changeStatus={setEmail} regexp={new RegExp(regExp_email)} error_message="Email debe seguir el siguiente formato: foo-bar.baz@example.com"/>
                        </div>
                        <div className="row row-register">
                            <ItemForm classCol="col-12" type="password" placeholder="" title="PASSWORD" status={pass} changeStatus={setPass} regexp={new RegExp(regExp_required)}/>
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

export default SignIn;
