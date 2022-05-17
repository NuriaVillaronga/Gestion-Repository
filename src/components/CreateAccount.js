import React,  {Fragment} from 'react';

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
                <div className="col-12 col-button-create-account">
                    <button className="btn button-gestion" id="create-account-button">CREATE ACCOUNT</button>
                </div>
            </div>
        </Fragment>);  
}; 

export default CreateAccount;