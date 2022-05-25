import React,  {Fragment} from 'react';
import ManagementButton from '../ManagementButton';
import TitleHeader from '../TitleHeader';
import { Link } from 'react-router-dom';

function CreateAccount() { 

  return (<Fragment>
            <div className='row'>
                <div className='col-2'/>
                <div className='col-10'>
                    <TitleHeader title="CREAR UNA CUENTA" id="create-account-title"/>
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
                            <ManagementButton classCol="col-12 col-button-create-account" classBtn="button-gestion" id="create-account-button" value="REGISTRARME"/>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>);  
}; 

export default CreateAccount;