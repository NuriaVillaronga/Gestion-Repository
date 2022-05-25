import React, { Fragment, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function PopCarrito() { 

    const [showCarrito, setShowCarrito] = useState(false);
    const handleShowCarrito = () => {
        setShowCarrito(true);
    }
    const handleHiddeCarrito = () => {
        setShowCarrito(false);
    }

    return (<Fragment>
                <Button variant="light" onClick={handleShowCarrito} id="btn-canvas-carrito">
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
            </Fragment>);  
};

export default PopCarrito;