import React from 'react';
import PopCarrito from './PopCarrito';
import PopUser from './PopUser';

function MainHeader(props) { 

    return (<div className="row row-ALL-menu">
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
                                <div className="col-3 menu-item" id="menu-item-novedades" onMouseOver={props.handleShowNovedades}>NOVEDADES</div>
                                <div className='col-2 menu-item' id="menu-item-clothes">CLOTHES</div>
                                <div className='col-2 menu-item' id="menu-item-ofertas">OFERTAS</div>
                                <div className='col-3 menu-item' id="menu-item-explora">EXPLORA</div>
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
            </div>);  
};

/*
onMouseOut={props.handleHiddeNovedades}
*/
export default MainHeader;