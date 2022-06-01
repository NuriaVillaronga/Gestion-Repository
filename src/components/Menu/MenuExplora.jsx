import React from 'react';
import { Fade } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import imagen from '../../compo2.png';
import imagen2 from '../../compo.png';


function MenuExplora(props) { 

    return (<Alert className="alert-menu-explora" show={props.showExplora} transition={Fade} onMouseOver={props.handleShowExplora} onMouseOut={props.handleHiddeExplora}> 
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12" id="col-image-explora">
                                <img src={imagen} id="image-explora" className="ocultar-1500"></img> 
                                <img src={imagen2} id="image-explora" className="desplegar-1500"></img> 
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row row-enlace-explora">
                            <div className="col-6 ocultar-1700">SOBRE NOSOTROS</div>
                            <div className="col-6 ocultar-1700">FUTURAS INCORPORACIONES</div>
                            <div className="col-12 desplegar-1700">SOBRE NOSOTROS</div>
                            <div className="col-12 desplegar-1700">FUTURAS INCORPORACIONES</div> 
                        </div>
                    </div>
                </div>
            </Alert>);  
};

export default MenuExplora;