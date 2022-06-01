import React, { Fragment, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function PopMenu() { 

    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(true);
        var close = document.getElementById("btn-close-menu");
        close.style.display = "block";
        var burguer = document.getElementById("btn-burguer-menu");
        burguer.style.display = "none";
    }
    const handleHiddeMenu = () => { 
        setShowMenu(false);
        var close = document.getElementById("btn-close-menu");
        close.style.display = "none";
        var burguer = document.getElementById("btn-burguer-menu");
        burguer.style.display = "block";
    }

    return (<Fragment>
                <Button variant="light" onClick={handleShowMenu} id="btn-burguer-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </Button>
                <Button variant="light" onClick={handleHiddeMenu} id="btn-close-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Button>
                <Offcanvas show={showMenu} scroll={false} backdrop={false} placement="end" id="canvas-menu">
                    <Offcanvas.Header>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </Fragment>);  
};

export default PopMenu;