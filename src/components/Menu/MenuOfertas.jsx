import React from 'react';
import { Fade } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import ManagementButton from '../ManagementButton';

function MenuOfertas(props) { 

    return (<Alert className="alert-menu-ofertas" show={props.showOfertas} transition={Fade} onMouseOver={props.handleShowOfertas} onMouseOut={props.handleHiddeOfertas}> 
                <div className="row">
                    <div className="col-6 border">
                        <div className="row">
                            <div className="col-12 border col-titulo-menu-ofertas">OFERTAS Y REBAJAS</div>
                        </div>
                        <div className="row">
                            <div className="col-5 border" id="col-featured-ofertas-image">
                                <div className="container-featured-ofertas-image">
                                    Imagen
                                </div>
                            </div>
                            <div className="col-7 border col-ofertas-expli">
                                <div className="container-ofertas-expli">
                                    <div className="row">
                                        <div className="col-12">Titulo</div>
                                        <div className="col-12">Subtitulo oferta</div>
                                        <div className="col-12">Descripcion</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <ManagementButton classCol="col-12 col-sale-products-button" classBtn="button-gestion" id="sale-products-button" value="PRODUCTOS REBAJADOS"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12" id="col-image-ofertas">
                                aa
                            </div>
                        </div>
                    </div>
                </div>
            </Alert>);  
};

export default MenuOfertas;
