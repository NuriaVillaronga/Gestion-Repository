import React from 'react';
import { Fade } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import imagen from '../../sophiacol1.png';
import FeaturedItemNovedades from './FeaturedItemNovedades';

/*
onMouseOut={props.handleHiddeNovedades}
*/
function MenuNovedades(props) { 

    return (<Alert className="alert-menu-novedades" show={props.showNovedades} transition={Fade} onMouseOver={props.handleShowNovedades}>
                <div className="row">
                    <div className="col-4 ">
                        <div className="row">
                            <div className="col-12" id="col-image-novedades">
                                <img src={imagen} id="image-novedades"></img> 
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row item-list-novedades">
                            <div className="col-12">
                                <div className="row"><div className="col-12 item-novedades">VER TODO</div></div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-4 item-novedades">ABRIGOS/CHAQUETAS</div>
                                    <div className="col-4 item-novedades">PANTALONES/FALDAS</div>
                                    <div className="col-4 item-novedades">CAMISETAS/SUDADERAS</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-4 item-novedades">VESTIDOS</div>
                                    <div className="col-4 item-novedades">ACCESORIOS</div>
                                    <div className="col-4 item-novedades">CALZADO</div>  
                                </div>
                            </div>
                        </div>
                        <div className="row row-featured-novedades">
                            <div className="col-1"/>
                            <div className="col-10">
                                <div className="row featured-novedades-content">
                                    <FeaturedItemNovedades/>
                                    <FeaturedItemNovedades/>
                                    <FeaturedItemNovedades/>
                                </div>
                            </div>
                            <div className="col-1"/>
                        </div>
                    </div>
                </div>
            </Alert>);  
};

export default MenuNovedades;
