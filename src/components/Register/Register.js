import React,  {Fragment} from 'react';
import ItemForm from '../ItemForm';
import ManagementButton from '../ManagementButton';

function Register() { 

  return (<Fragment>
            <div className="row row-title border">
                <div className="col-12">
                    <h4>CREATE ACCOUNT</h4> 
                </div>
            </div>
            <form className="row">
                <div className="col-12 col-lg-5 col-register-login">
                    <div className="row">
                        <ItemForm classCol="col-12" type="email" placeholder="" title="EMAIL *"/>
                    </div>
                    <div className="row">
                        <ItemForm classCol="col-12" type="password" placeholder="(8-16 caracteres, mínimo una mayúscula)" title="NUEVA CONTRASEÑA *"/>
                    </div>
                    <div className="row">
                        <ItemForm classCol="col-12" type="password" placeholder="(8-16 caracteres, mínimo una mayúscula)" title="CONFIRMA CONTRASEÑA *"/>
                    </div>
                </div>
                <div className="col-12 col-lg-7 col-register-shipment">
                    <div className="row row-register">
                        <ItemForm classCol="col-12 col-md-4 col-lg-5 col-xxl-4" type="text" placeholder="" title="NOMBRE *"/>
                        <ItemForm classCol="col-12 col-md-8 col-lg-7 col-xxl-8 col-label-register-md" type="text" placeholder="" title="APELLIDOS *"/>
                    </div>
                    <div className="row row-register">
                        <ItemForm classCol="col-12" type="text" placeholder="" title="DIRECCIÓN *"/>
                    </div>
                    <div className="row row-register">
                        <ItemForm classCol="col-12 col-md-8 col-lg-7 col-xxl-8" type="text" placeholder="" title="APARTAMENTO"/>
                        <ItemForm classCol="col-12 col-md-4 col-lg-5 col-xxl-4 col-label-register-md" type="text" placeholder="" title="TELÉFONO"/>
                    </div>
                    <div className="row row-register">
                        <ItemForm classCol="col-12 col-md-4" type="text" placeholder="" title="PROVINCIA *"/>
                        <ItemForm classCol="col-12 col-md-4 col-label-register-md" type="text" placeholder="" title="CIUDAD *"/>
                        <ItemForm classCol="col-12 col-md-4 col-label-register-md" type="text" placeholder="" title="CÓDIGO POSTAL"/>
                    </div>
                </div>
                <div className="row">
                    <ManagementButton classCol="col-12 col-register-button-create" classBtn="button-gestion" id="create-register-button" value="CREAR CUENTA"/>
                </div>
                <div className="row">
                    <ManagementButton classCol="col-12 col-register-button-cancel" classBtn="" id="" value="CANCELAR"/>
                </div>
            </form>
        </Fragment>);  
}; 

export default Register;