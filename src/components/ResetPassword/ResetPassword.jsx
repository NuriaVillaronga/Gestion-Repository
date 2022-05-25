import React,  { useState, Fragment} from 'react';
import ManagementButton from '../ManagementButton';
import ItemForm from '../ItemForm';
import TitleHeader from '../TitleHeader';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';


function ResetPassword() {  

    const [email, setEmail] = useState({field:"", valid: null});  
    const regExp_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  return (<Fragment>
            <div className="row">
                <div className='col-12 container-breadcrumb'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/" className='breadcrumb-link'>HOME</Breadcrumb.Item>
                        <Breadcrumb.Item href="/login" className='breadcrumb-link'>LOGIN</Breadcrumb.Item>
                        <Breadcrumb.Item active className='breadcrumb-active'>CONTRASEÑA</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='col-12 container-specific-content'>
                    <div className='row'>
                        <div className="col-12 col-md-1 col-lg-2 col-xxl-3"/>
                        <div className="col-12 col-md-10 col-lg-8 col-xxl-6">
                            <TitleHeader title="REESTABLECER CONTRASEÑA"/>
                            <div className="row">
                                <div className="col-12 col-message-reset-pass">
                                    <div>Para reestablecer tu contraseña, introduce aquí tu email. Recibirás un correo con una contraseña provisional y las instrucciones para crear una nueva.</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <form>
                                        <div className="row row-email-reset-pass">
                                            <ItemForm classCol="col-12" type="email" placeholder="" title="EMAIL" status={email} changeStatus={setEmail} regexp={new RegExp(regExp_email)} error_message="Email debe seguir el siguiente formato: foo-bar.baz@example.com"/>
                                        </div>
                                        <div className="row">
                                            <ManagementButton classCol="col-12 col-button-reset-pass" classBtn="button-gestion" id="reset-pass-button" value="ENVIAR EMAIL"/>
                                        </div>
                                        <div className="row">
                                            <Link to="/login">
                                                <ManagementButton classCol="col-12 col-register-button-cancel" classBtn="" id="" value="CANCELAR"/>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 col-lg-2 col-xxl-3"/>
                    </div>
                </div>
            </div>
        </Fragment>);  
}; 

export default ResetPassword;