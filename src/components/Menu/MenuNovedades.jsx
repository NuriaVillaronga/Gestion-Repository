import React from 'react';
import { Fade } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import imagen from '../../sophiacol1.png';

function MenuNovedades(props) { 

    return (<Alert className="alert-menu" show={props.showNovedades} transition={Fade} onMouseOver={props.handleShowNovedades}>
                <div className="row">
                    <div className="col-4 ">
                        <div className="row">
                            <div className="col-12" id="imagen-sophia">
                                <img src={imagen} id="imagen-sop"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row menu-listado">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-alineada">VER TODO</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-4 col-alineada">ABRIGOS/CHAQUETAS</div>
                                    <div className="col-4 col-alineada">PANTALONES/FALDAS</div>
                                    <div className="col-4 col-alineada">CAMISETAS/SUDADERAS</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-4 col-alineada">VESTIDOS</div>
                                    <div className="col-4 col-alineada">ACCESORIOS</div>
                                    <div className="col-4 col-alineada">CALZADO</div> 
                                </div>
                            </div>
                        </div>
                        <div className="row menu-lista-imagen">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className="row container-global-imagenes">
                                <div className="col-4">
                                        <div className="row">
                                            <div className="col-12 container-imagen-menu">
                                                <div className="imagen-menu">Imagen</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 container-titulo-menu">Titulo</div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="row">
                                            <div className="col-12 container-imagen-menu">
                                                <div className="imagen-menu">Imagen</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 container-titulo-menu">Titulo</div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="row">
                                            <div className="col-12 container-imagen-menu">
                                                <div className="imagen-menu">Imagen</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 container-titulo-menu">Titulo</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </Alert>);  
};

/*
onMouseOut={props.handleHiddeNovedades}
*/

export default MenuNovedades;
