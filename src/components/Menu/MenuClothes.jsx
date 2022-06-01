import React from 'react';
import { Fade } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import imagen from '../../novedades.png';
import imagen2 from '../../novedades2.png';
import FeaturedItemClothes from './FeaturedItemClothes'; 


function MenuClothes(props) { 

    return (<Alert className="alert-menu-clothes" show={props.showClothes} transition={Fade} onMouseOver={props.handleShowClothes} onMouseOut={props.handleHiddeClothes}>
                <div className="row">
                    <div className="col-4 "> 
                        <div className="row">
                            <div className="col-12" id="col-image-clothes">
                                <img src={imagen} id="image-clothes" className="ocultar-1570"></img> 
                                <img src={imagen2} id="image-clothes" className="desplegar-1570"></img>   
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row item-list-clothes">
                            <div className="col-12">
                                <div className="row"><div className="col-12 item-clothes">VER TODO</div></div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-4 item-clothes items-izq">ABRIGOS/CHAQUETAS</div>
                                    <div className="col-4 item-clothes">PANTALONES/FALDAS</div>
                                    <div className="col-4 item-clothes items-der">CAMISETAS/SUDADERAS</div>  
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-4 item-clothes items-izq">VESTIDOS</div>
                                    <div className="col-4 item-clothes">ACCESORIOS</div>
                                    <div className="col-4 item-clothes items-der">CALZADO</div>     
                                </div>
                            </div>
                        </div>
                        <div className="row row-featured-clothes">
                            <div className="col-1"/>
                            <div className="col-10">
                                <div className="row featured-clothes-content">
                                    <FeaturedItemClothes/>
                                    <FeaturedItemClothes/>
                                    <FeaturedItemClothes/>
                                </div>
                            </div>
                            <div className="col-1"/>
                        </div>
                    </div>
                </div>
            </Alert>);  
};

export default MenuClothes;