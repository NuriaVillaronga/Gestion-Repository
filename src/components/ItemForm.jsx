import React from 'react';

function ItemForm(props) { 

    var style_input ="";
    var style_error ="";
    var id;
    var mensaje;
    var valido;
    var requerido;
    var regexp

    if (props.id == null) {
        id = null;
    }
    else {
        id = props.id;
    }

    if (props.error_message == null) {
        mensaje = null;
    }
    else {
        mensaje = props.error_message
    }

    if (props.validacion == null) {
        valido = true;
    }
    else {
        valido = props.validacion;
    }

    if (props.obligatorio == null) {
        requerido = true;
    }
    else {
        requerido = props.obligatorio;
    }

    if (props.regexp == null) {
        regexp = null;
    }
    else {
        regexp = props.regexp;
    }

    var password =  document.getElementById("new-pass");

    const handleInputChange = (event) => { 
        event.preventDefault();
        props.changeStatus({...props.status, field: event.target.value}) 
    }

    if (valido == true) {

        const validation = () => { 
            if (props.regexp) { 
                if(props.regexp == "/^$/") {
                  if(!props.regexp.test(props.status.field)) { 
                    props.changeStatus({...props.status, valid: "validado"})  
                  }
                  else {
                    props.changeStatus({...props.status, valid: "no_validado"})
                  } 
                } 
                else {
                  if(props.regexp.test(props.status.field)) { 
                    props.changeStatus({...props.status, valid: "validado"}) 
                  }
                  else {
                    props.changeStatus({...props.status, valid: "no_validado"})
                  }
                }
            }
            else {
                if ( password.value != "") {
                    if(password.value == props.status.field) { 
                        props.changeStatus({...props.status, valid: "validado"})
                    }
                    else {
                        props.changeStatus({...props.status, valid: "no_validado"})
                    }
                  }
                  else if ( password.value == "" && props.status.field == "") {
                      props.changeStatus({...props.status, valid: "validado"})
                  }
                  else if ( password.value == "" && props.status.field != "") {
                    props.changeStatus({...props.status, valid: "no_validado"}) 
                }
            }
        }
        
        if(props.status.valid == "no_validado") {
            style_input = "invalid_input";
            style_error = "show_error";
        }
        else if (props.status.valid == "validado" || props.status.valid == null) {
            style_input = "";
            style_error = "hidde_error";
        }

        if (props.status.field == "" && requerido == true) {
            mensaje = "Este campo es obligatorio";
        }
        else {
            mensaje = props.error_message;
        }

        return (<div className={props.classCol}>
            <label className="form-label">{props.title}</label>
            <input className={`form-control ${style_input}`} id={id} type={props.type} placeholder={props.placeholder} value={props.status.field} regexp={regexp} onKeyUp={validation} onBlur={validation} onChange={handleInputChange}/>
            <div className={style_error}>{mensaje}</div>
        </div>); 
    }
    else {
        return (<div className={props.classCol}>
            <label className="form-label">{props.title}</label>
            <input className="form-control" type={props.type} id={id} placeholder={props.placeholder} value={props.status.field} onChange={handleInputChange}/>
        </div>); 
    }
        
}; 

export default ItemForm;