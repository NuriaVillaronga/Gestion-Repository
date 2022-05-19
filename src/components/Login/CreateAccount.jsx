import React,  {Fragment} from 'react';
import ManagementButton from '../ManagementButton';
import TitleHeader from '../TitleHeader';
import { Link } from 'react-router-dom';

function CreateAccount() { 

  return (<Fragment>
            <TitleHeader title="CREATE ACCOUNT"/>
            <div className="row row-message-1-create-account">
                <div className="col-12">
                    <span>Nuevo en G15NV89?</span>
                </div>
            </div>
            <div className="row row-message-2-create-account">
                <div className="col-12">
                    <span>Crea una cuenta para agilizar el proceso de compra!</span>
                </div>
            </div>
            <div className="row">
                <Link to="/register">
                    <ManagementButton classCol="col-12 col-button-create-account" classBtn="button-gestion" id="create-account-button" value="CREAR CUENTA"/>
                </Link>
            </div>
        </Fragment>);  
}; 

export default CreateAccount;