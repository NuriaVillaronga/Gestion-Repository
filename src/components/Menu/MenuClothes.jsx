import React from 'react';
import { Fade } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import ManagementButton from '../ManagementButton';

import vestidos from '../../titulos_menu/vestidos.png';
import accesorios from '../../titulos_menu/accesorios.png';
import calzado from '../../titulos_menu/calzado.png';
import pantalones from '../../titulos_menu/pantalones_faldas.png';
import camisetas from '../../titulos_menu/camisetas_tops.png';
import sudaderas from '../../titulos_menu/sudaderas_jerseys.png';
import bolsos from '../../titulos_menu/bolsos.png';
import abrigos from '../../titulos_menu/abrigos_cazadoras.png';

import acc from '../../slider-menu/acc.jpg';
import abr from '../../slider-menu/abr.jpg';
import bol from '../../slider-menu/bol.jpg';
import cal from '../../slider-menu/cal.jpg';
import fal from '../../slider-menu/fal.jpg';
import sud from '../../slider-menu/sud.jpg';
import top from '../../slider-menu/top.jpg';
import ves from '../../slider-menu/ves.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function MenuClothes(props) { 

    return (<Alert className="alert-menu-clothes" show={props.showClothes} transition={Fade} onMouseOver={props.handleShowClothes} onMouseOut={props.handleHiddeClothes}>
                <div className="row">
                    <div className="col-6">
                        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={10} slidesPerView={2} navigation pagination={{ clickable: true }}>
                            <SwiperSlide>
                                <img src={abr} className="img-slide"/>
                                <div className="row info-slider">
                                    <div className="col-8 title-slider">Summer's Almost Gone</div>
                                    <div className="col-4 price-slider">478 €</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={acc} className="img-slide"/>
                                <div className="row info-slider">
                                    <div className="col-8 title-slider">The Water Diviner</div>
                                    <div className="col-4 price-slider">291 €</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bol} className="img-slide"/>
                                <div className="row info-slider">
                                    <div className="col-8 title-slider">Si señor</div>
                                    <div className="col-4 price-slider">195 €</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sud} className="img-slide"/>
                                <div className="row info-slider">
                                    <div className="col-8 title-slider">La cathédrale engloutie</div>
                                    <div className="col-4 price-slider">120 €</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={fal} className="img-slide"/>
                                <div className="row info-slider">
                                    <div className="col-8 title-slider">Você Não Presta</div>
                                    <div className="col-4 price-slider">171,49 €</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={top} className="img-slide"/>
                                <div className="row info-slider">
                                    <div className="col-8 title-slider">Milonga de aquí</div>
                                    <div className="col-4 price-slider">284,58 €</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ves} className="img-slide"/>
                                <div className="row info-slider">
                                    <div className="col-8 title-slider">Love Me Two Times</div>
                                    <div className="col-4 price-slider">284,58 €</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={cal} className="img-slide"/>
                                <div className="row info-slider"> 
                                    <div className="col-8 title-slider">Experience</div> 
                                    <div className="col-4 price-slider">227,22€</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-6 col-enlaces">
                        <div className="grp"> 
                            <div className="div-titulo-menu"><img src={vestidos} className="img-vestidos"/></div>
                            <div className="div-titulo-menu"><img src={abrigos} className="img-abrigos"/></div>
                            <div className="div-titulo-menu"><img src={camisetas} className="img-camisetas"/></div>
                            <div className="div-titulo-menu"><img src={calzado} className="img-calzado"/></div>
                        </div>
                        <div className="grp"> 
                            <div className="div-titulo-menu"><img src={sudaderas} className="img-sudaderas"/></div>      
                            <div className="div-titulo-menu"><img src={accesorios} className="img-accesorios"/></div>
                            <div className="div-titulo-menu"><img src={pantalones} className="img-pantalones"/></div> 
                            <div className="div-titulo-menu"><img src={bolsos} className="img-bolsos"/></div> 
                        </div>
                        <div className="todos-div">
                            <div className="todos-content">
                                <div>Todas las piezas de nuestra colección han sido seleccionadas cuidadosamente para lograr <b>tendencia</b> y <b>atemporalidad</b>.</div>
                                <div>Podrás encontrar <b>más de 100 piezas</b> de diseñadores diferentes que fluctuan entre el lujo y un precio medio.</div>
                                <div>Explora la colección completa.</div>
                            </div>
                            <div className="ver-todo">
                                <button className="button-todo">VER TODO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Alert>);  
};

export default MenuClothes;