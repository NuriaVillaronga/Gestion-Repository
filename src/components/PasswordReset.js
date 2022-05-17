import React,  {Fragment} from 'react';

function PasswordReset() { 

  return (<Fragment>
            <div className="row">
                <div className="col-12 col-md-1 col-lg-2 col-xxl-3"></div>
                <div className="col-12 col-md-10 col-lg-8 col-xxl-6">
                    <div className="row row-title">
                        <div className="col-12">
                            <h4>REESTABLECER CONTRASEÑA</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-message-reset-pass">
                            <div>Para reestablecer tu contraseña, introduce aquí tu email. Recibirás un correo con una contraseña provisional y las instrucciones para crear una nueva.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="row row-email-reset-pass">
                                    <div className="col-12">
                                        <label className="form-label">EMAIL</label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-button-reset-pass">
                                        <button className="btn button-gestion" id="reset-pass-button">ENVIAR EMAIL</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-register-button-cancel">
                                        <button className="btn">CANCELAR</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-1 col-lg-2 col-xxl-3"></div>
            </div>
        </Fragment>);  
}; 

export default PasswordReset;