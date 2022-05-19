import React,  { useState, Fragment} from 'react';
import ItemForm from '../ItemForm';

function RegisterInfoShipment() { 

    const [nom, setNom] = useState({field:"", valid: null});  
    const [apel, setApel] = useState({field:"", valid: null});
    const [direc, setDirec] = useState({field:"", valid: null});
    const [apart, setApart] = useState({field:"", valid: null});
    const [telf, setTelf] = useState({field:"", valid: null});
    const [cp, setCP] = useState({field:"", valid: null});

    const [prov, setProv] = useState({field:"", valid: null});
    const [ciud, setCiud] = useState({field:"", valid: null});

    const regExp_cp = /^[0-9]{5}$/;
    const regExp_phone = /^[0-9]{9}$/;
    const regExp_required =/^$/;

  return (<Fragment>  
            <div className="row row-register">
                <ItemForm classCol="col-12 col-md-4 col-lg-5 col-xxl-4" type="text" placeholder="" title="NOMBRE *" status={nom} changeStatus={setNom} regexp={new RegExp(regExp_required)}/>
                <ItemForm classCol="col-12 col-md-8 col-lg-7 col-xxl-8 col-label-register-md" type="text" placeholder="" title="APELLIDOS *" status={apel} changeStatus={setApel} regexp={new RegExp(regExp_required)}/>
            </div>
            <div className="row row-register">
                <ItemForm classCol="col-12" type="text" placeholder="" title="DIRECCIÓN *" status={direc} changeStatus={setDirec} regexp={new RegExp(regExp_required)}/>
            </div>
            <div className="row row-register">
                <ItemForm classCol="col-12 col-md-8 col-lg-7 col-xxl-8" type="text" placeholder="" title="APARTAMENTO" status={apart} changeStatus={setApart} obligatorio={false} validacion={false}/>
                <ItemForm classCol="col-12 col-md-4 col-lg-5 col-xxl-4 col-label-register-md" type="text" placeholder="" title="TELÉFONO *" status={telf} changeStatus={setTelf} regexp={new RegExp(regExp_phone)} error_message="Teléfono debe contener 9 números"/>
            </div>
            <div className="row row-register">
                <ItemForm classCol="col-12 col-md-4" type="text" placeholder="" title="PROVINCIA *" status={prov} changeStatus={setProv} regexp={new RegExp(regExp_required)}/>
                <ItemForm classCol="col-12 col-md-4 col-label-register-md" type="text" placeholder="" title="CIUDAD *" status={ciud} changeStatus={setCiud} regexp={new RegExp(regExp_required)}/>  
                <ItemForm classCol="col-12 col-md-4 col-label-register-md" type="text" placeholder="" title="CÓDIGO POSTAL *" status={cp} changeStatus={setCP} regexp={new RegExp(regExp_cp)} error_message="Código postal debe contener 5 números"/>
            </div>
        </Fragment>);  
}; 

export default RegisterInfoShipment;