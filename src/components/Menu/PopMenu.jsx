import React, { Fragment } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Backdrop } from '@mui/material';

function PopMenu(props) { 

    return (<Fragment>
                <Button variant="light" onClick={props.handleShowMenu} id="btn-burguer-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </Button>
                <Button variant="light" onClick={props.handleHiddeMenu} id="btn-close-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Button>
                <Offcanvas show={props.showMenu} scroll={false} backdrop={false} placement="end" id="canvas-menu">
                    <Offcanvas.Body>
                        <ListGroup>
                            <ListGroupItem className="list-item-vacios"></ListGroupItem>
                            <ListGroupItem>CLOTHES</ListGroupItem>
                            <ListGroupItem>ABRIGOS/CHAQUETAS</ListGroupItem>
                            <ListGroupItem>PANTALONES/FALDAS</ListGroupItem>
                            <ListGroupItem>CAMISETAS/SUDADERAS</ListGroupItem>
                            <ListGroupItem>VESTIDOS</ListGroupItem>
                            <ListGroupItem>ACCESORIOS</ListGroupItem>
                            <ListGroupItem>Ver todo</ListGroupItem> 

                            <ListGroupItem>OFERTAS</ListGroupItem>
                            <ListGroupItem>BUNDLES</ListGroupItem>
                            <ListGroupItem>PRODUCTOS REBAJADOS</ListGroupItem>

                            <ListGroupItem>EXPLORA</ListGroupItem>
                            <ListGroupItem>SOBRE NOSOTROS</ListGroupItem>
                            <ListGroupItem>FUTURAS INCORPORACIONES</ListGroupItem>

                            <ListGroupItem>NOVEDADES</ListGroupItem>
                            <ListGroupItem>Nuevas incorporaciones</ListGroupItem>
                            <ListGroupItem>Productos más vendidos</ListGroupItem>
                            <ListGroupItem className="list-item-vacios"></ListGroupItem>
                        </ListGroup>
                    </Offcanvas.Body>
                </Offcanvas>
                <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 6 }} open={props.openBackdrop} id="backdrop-menu-res"></Backdrop>
            </Fragment>);  
};

export default PopMenu;
