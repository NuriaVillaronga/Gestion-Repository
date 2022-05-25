import React from 'react';
import ManagementButton from '../ManagementButton';
import TitleHeader from '../TitleHeader';
import RegisterInfoShipment from './RegisterInfoShipment';
import RegisterInfoSignIn from './RegisterInfoSignIn';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

function Register() { 

  return (<div className="row">
                <div className='col-12 container-breadcrumb'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/" className='breadcrumb-link'>HOME</Breadcrumb.Item>
                        <Breadcrumb.Item href="/login" className='breadcrumb-link'>LOGIN</Breadcrumb.Item>
                        <Breadcrumb.Item active className='breadcrumb-active'>REGISTRO</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="col-12 container-specific-content">
                    <TitleHeader title="CREATE ACCOUNT"/>
                    <form className="row">
                        <div className="col-12 col-lg-5 col-register-login">
                            <RegisterInfoSignIn/>
                        </div>
                        <div className="col-12 col-lg-7 col-register-shipment">
                            <RegisterInfoShipment/>
                        </div>
                        <ManagementButton classCol="col-12 col-register-button-create" classBtn="button-gestion" id="create-register-button" value="CREAR CUENTA"/>
                        <Link to="/login">
                            <ManagementButton classCol="col-12 col-register-button-cancel" classBtn="" id="" value="CANCELAR"/>
                        </Link>
                    </form>
                </div>
            </div>);  
}; 

export default Register;