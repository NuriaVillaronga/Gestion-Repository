import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Fade } from 'react-bootstrap';
import { Backdrop } from '@mui/material';
import { Alert } from 'react-bootstrap';
import imagen from '../sophiacol1.png';
import estrella from '../estrella.png';

function Menu() { 

    const [showCarrito, setShowCarrito] = useState(false);
    const handleShowCarrito = () => {
        setShowCarrito(true);
    }
    const handleHiddeCarrito = () => {
        setShowCarrito(false);
    }

    const [openFilter, setOpenFilter] = useState(false);

    const [showNovedades, setShowNovedades] = useState(false);
    const handleShowNovedades = () => {
        setOpenFilter(true);
        setShowNovedades(true);
    }
    const handleHiddeNovedades = () => {
        setOpenFilter(false);
        setShowNovedades(false);
    }

    return (<nav className="row menu-row">
            <div className="col-12 sub-header-row">
                <div className="row">
                    <div className="col-1 col-md-1 col-lg-2"></div>
                    <div className="col-10 col-md-10 col-lg-8 mensaje-top">
                        GASTOS DE ENVÍO GRATUITOS EN COMPRAS SUPERIORES A 80€
                    </div>
                    <div className="col-1 col-md-1 col-lg-2"></div>
                </div>
            </div>
            <div className="col-12 header-row">
                <div className="row row-ALL-menu">
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
                                        <div className="col-3 menu-item-label-nov" onMouseOver={handleShowNovedades}>
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
                                                <Dropdown autoClose="inside">
                                                    <Dropdown.Toggle id="dropdown-toggle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
                                                    </Dropdown.Toggle> 
                                                    <Dropdown.Menu id="dropdown-menu" align={{ lg: 'start' }}>  
                                                        <Dropdown.Item href="/login">Login</Dropdown.Item>
                                                        <Dropdown.Item href="/pedidos">Pedidos</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item href="#">Logout</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="col-4 col-carrito">
                                                <Button variant="light" onClick={handleShowCarrito} className="me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>
                                        </Button>
                                        <Offcanvas show={showCarrito} onHide={handleHiddeCarrito} scroll={true} placement="end">
                                            <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                            </div>
                                            <div className="col-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Alert className="alert-menu" show={showNovedades} transition={Fade} onMouseOver={handleShowNovedades}>
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
            </Alert>
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 7 }} open={openFilter}></Backdrop>
        </nav>);  
};

/*El menú será con alerts hasta 1150px*/

/*
onMouseOut={handleHiddeNovedades}
*/

export default Menu;
