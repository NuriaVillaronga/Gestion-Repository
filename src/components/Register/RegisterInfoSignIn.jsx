import React,  { useState, Fragment} from 'react';
import ItemForm from '../ItemForm';

function RegisterInfoSignIn() { 

    const [email, setEmail] = useState({field:"", valid: null});  
    const [pass, setPass] = useState({field:"", valid: null});
    const [passConf, setPassConf] = useState({field:"", valid: null});

    const regExp_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const regExp_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  return (<Fragment>
            <div className="row">
                <ItemForm classCol="col-12" type="email" placeholder="" title="EMAIL *" status={email} changeStatus={setEmail} regexp={new RegExp(regExp_email)} error_message="Email debe seguir el siguiente formato: foo-bar.baz@example.com"/>
            </div>
            <div className="row">
                <ItemForm classCol="col-12" type="password" placeholder="(8-16 caracteres, mínimo una mayúscula)" title="NUEVA CONTRASEÑA *" id="new-pass" status={pass} changeStatus={setPass} regexp={new RegExp(regExp_pass)} error_message="Contraseña debe tener entre 8 y 16 caracteres y al menos una mayúscula"/>
            </div>
            <div className="row">
                <ItemForm classCol="col-12" type="password" placeholder="(8-16 caracteres, mínimo una mayúscula)" title="CONFIRMA CONTRASEÑA *" status={passConf} changeStatus={setPassConf} error_message="Ambas contraseñas deben coincidir"/> 
            </div>
        </Fragment>);  
}; 

export default RegisterInfoSignIn;