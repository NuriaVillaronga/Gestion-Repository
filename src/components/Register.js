import React,  {Fragment} from 'react';

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
                        <div className="col-12">
                            <label className="form-label">EMAIL *</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label className="form-label">NUEVA CONTRASEÑA *</label>
                            <input className="form-control" placeholder="(8-16 caracteres, mínimo una mayúscula)"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label className="form-label">CONFIRMA CONTRASEÑA *</label>
                            <input className="form-control" placeholder="(8-16 caracteres, mínimo una mayúscula)"></input>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-7 col-register-shipment">
                    <div className="row row-register">
                        <div className="col-12 col-md-4 col-lg-5 col-xxl-4">
                            <label className="form-label">NOMBRE *</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-12 col-md-8 col-lg-7 col-xxl-8 col-label-register-md">
                            <label className="form-label">APELLIDOS *</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row row-register">
                        <div className="col-12">
                            <label className="form-label">DIRECCIÓN *</label>
                            <input className="form-control"></input> 
                        </div>
                    </div>
                    <div className="row row-register">
                        <div className="col-12 col-md-8 col-lg-7 col-xxl-8">
                            <label className="form-label">APARTAMENTO</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-12 col-md-4 col-lg-5 col-xxl-4 col-label-register-md">
                            <label className="form-label">TELÉFONO</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row row-register">
                        <div className="col-12 col-md-4">
                            <label className="form-label">PROVINCIA *</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-12 col-md-4 col-label-register-md">
                            <label className="form-label">CIUDAD *</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-12 col-md-4 col-label-register-md"> 
                            <label className="form-label">CÓDIGO POSTAL *</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-register-button-create">
                        <button className="btn button-gestion" id="create-register-button">CREAR CUENTA</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-register-button-cancel">
                        <button className="btn">CANCELAR</button>
                    </div>
                </div>
            </form>
        </Fragment>);  
}; 

export default Register;