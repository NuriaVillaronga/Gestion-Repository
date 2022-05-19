import React,  {Fragment} from 'react';
import ManagementButton from '../ManagementButton';

function CreateAccount() { 

  return (<Fragment>
            <div className="row row-title border">
                <div className="col-12">
                    <h4>CREATE ACCOUNT</h4>
                </div>
            </div>
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
                <ManagementButton classCol="col-12 col-button-create-account" classBtn="button-gestion" id="create-account-button" value="CREAR CUENTA"/>
            </div>
        </Fragment>);  
}; 

export default CreateAccount;