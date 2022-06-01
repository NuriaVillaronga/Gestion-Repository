import React, { Fragment } from 'react';
import PopCarrito from './PopCarrito';
import PopMenu from './PopMenu';
import PopUser from './PopUser';

function MainHeader(props) { 

    return (<Fragment>
                <div className="row row-ALL-menu">
                    <div className="col-3"> 
                        <div className='row'>
                            <div className='col-12 col-logo'>G15VN89</div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-5 col-xxl-6">
                        <div className='row'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-1 show-space-menu'/>
                                    <div className="col-3 menu-item" id="menu-item-novedades">NOVEDADES</div>
                                    <div className='col-2 menu-item' id="menu-item-clothes" onMouseOver={props.handleShowClothes} onMouseOut={props.handleHiddeClothes}>CLOTHES</div>
                                    <div className='col-2 menu-item' id="menu-item-ofertas" onMouseOver={props.handleShowOfertas} onMouseOut={props.handleHiddeOfertas}>OFERTAS</div>
                                    <div className='col-3 menu-item' id="menu-item-explora" onMouseOver={props.handleShowExplora} onMouseOut={props.handleHiddeExplora}>EXPLORA</div>
                                    <div className='col-2 hidde-space-menu'/>
                                    <div className='col-1 show-space-menu'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-xxl-3"> 
                        <div className='row'>
                            <div className='col-2'/>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-8 col-search-input'><input className='form-control' id="search-input" placeholder='SEARCH'/></div>
                                    <div className='col-4'>
                                        <div className="row">
                                            <div className="col-4 col-icon-user"><PopUser/></div>
                                            <div className="col-4 col-icon-carrito"><PopCarrito/></div>
                                            <div className="col-4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-RESPONSIVE-menu">
                    <div className="col-4 col-lg-4 border"> 
                        <PopMenu/>
                    </div>
                    <div className="col-4 col-lg-4 border">
                        Logo
                    </div>
                    <div className="col-4 col-lg-4 border"> 
                        <div className="row">
                            <div className="col-4 col-icon-user"><PopUser/></div>
                            <div className="col-4 col-icon-carrito"><PopCarrito/></div>
                            <div className="col-4"/>
                        </div>
                    </div>
                </div>
            </Fragment>);  
};

export default MainHeader;