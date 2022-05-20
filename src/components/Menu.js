import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Menu() { 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (<nav className="row menu-row">
            <div className="col-12 sub-header-row"></div>
            <div className="col-12 header-row">
                <div className="row border">
                    <div className="col-2 border">
                        <div className='row'>
                            <div className='col-12 logo border'>G15VN89</div>
                        </div>
                    </div>
                        <div className="col-6 border">
                            <div className='row border'>
                                <div className='col-12 border'>
                                    <div className='row border'>
                                        <div className='col-1 border'></div>
                                        <div className='col-3 border menu-item-label'>NOVEDADES</div>
                                        <div className='col-2 border menu-item-label'>CLOTHES</div>
                                        <div className='col-2 border menu-item-label'>REBAJAS</div>
                                        <div className='col-3 border menu-item-label'>EXPLORA</div>
                                        <div className='col-1 border'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 border">
                        <div className='row border'>
                            <div className='col-7 border'>
                                        <div className='row'>
                                            <div className='col-12 border'>
                                                <input className='form-control search-input' placeholder='SEARCH'></input>
                                            </div>
                                        </div>
                            </div>
                            <div className='col-5 border'>
                                <div className='row border'>
                                    <div className='col-2 border'>4</div>
                                    <div className='col-3 border'>ban</div>
                                    <div className='col-3 border'>
                                        
                                        <Dropdown autoClose="inside">
                                            <Dropdown.Toggle id="dropdown-toggle">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
                                            </Dropdown.Toggle> 
                                            <Dropdown.Menu id="dropdown-menu" align={{ lg: 'start' }}>  
                                                <Dropdown.Item href="/login">Login</Dropdown.Item>
                                                <Dropdown.Item href="/pedidos">Pedidos</Dropdown.Item>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item href="#">Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                    <div className='col-4 border'>
                                        
                                        <Button variant="light" onClick={toggleShow} className="me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>
                                        </Button>
                                        <Offcanvas show={show} onHide={handleClose} scroll={true} placement="end">
                                            <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                            </Offcanvas.Body>
                                        </Offcanvas>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>);  
};

export default Menu;
