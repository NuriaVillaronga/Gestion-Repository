import React from 'react';
import PopCarrito from './PopCarrito';
import PopUser from './PopUser';

function MainHeader(props) { 

    return (<div className="row row-ALL-menu">
                <div className="col-3"> 
                    <div className='row'>
                        <div className='col-12 logo'>G15VN89</div>
                    </div>
                </div>

                <div className="col-6 col-lg-5 col-xxl-6">
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-1 show-1199'></div>
                                <div className="col-3 menu-item-label-nov" onMouseOver={props.handleShowNovedades}>
                                    <div>NOVEDADES</div>
                                </div>
                                <div className='col-2 menu-item-label clothes'>CLOTHES</div>
                                <div className='col-2 menu-item-label ofertas'>OFERTAS</div>
                                <div className='col-3 menu-item-label-ex'>EXPLORA</div>
                                <div className='col-2 hidde-1199'></div>
                                <div className='col-1 show-1199'></div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="col-4 col-lg-4 col-xxl-3"> 
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-10'>
                            <div className='row'>
                                <div className='col-8 col-search-inp'> 
                                    <input className='form-control search-input' placeholder='SEARCH'></input>
                                </div>
                                <div className='col-4'>
                                    <div className="row">
                                        <div className="col-4 col-user">
                                            <PopUser/>
                                        </div>
                                        <div className="col-4 col-carrito">
                                            <PopCarrito/>
                                        </div>
                                        <div className="col-4"></div>
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