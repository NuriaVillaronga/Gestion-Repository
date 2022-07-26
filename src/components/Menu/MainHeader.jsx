import React, { Fragment, useState } from 'react';
import PopCarrito from './PopCarrito';
import PopMenu from './PopMenu';
import PopUser from './PopUser';
import useScreenSize from '../../useScreenSize';
import PopSearch from './PopSearch';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


function MainHeader(props) { 

    const [showMenu, setShowMenu] = useState(false);
    const [openBackdrop, setOpenBackdrop] = useState(false);

    useScreenSize(setShowMenu, setOpenBackdrop);
    
    const handleShowMenu = () => {
        setShowMenu(true);
        setOpenBackdrop(true);
        var close = document.getElementById("btn-close-menu");
        close.style.display = "block";
        var burguer = document.getElementById("btn-burguer-menu");
        burguer.style.display = "none";
    }
    const handleHiddeMenu = () => { 
        setShowMenu(false);
        setOpenBackdrop(false);
        var close = document.getElementById("btn-close-menu");
        close.style.display = "none";
        var burguer = document.getElementById("btn-burguer-menu");
        burguer.style.display = "block";
    }

    const handleCloseSearch = () => {
        var res_search = document.getElementById("row-search-res");
        res_search.style.display = "none"; 
        var res_menu = document.getElementById("responsive-menu");
        res_menu.style.display = "block"; 
    }

    return (<Fragment>
                <div className="row row-ALL-menu">
                    <div className="col-3 col-logo"> 
                        <div>G15VN89</div>
                    </div>
                    <div className="col-6 col-menu-medio">
                        <div className='menu-item' onMouseOver={props.handleShowClothes} onMouseOut={props.handleHiddeClothes}>TIENDA</div>
                        <div className='menu-item' onMouseOver={props.handleShowOfertas} onMouseOut={props.handleHiddeOfertas}>EXLUSIVOS</div>
                        <div className='menu-item'>SOBRE NOSOTROS</div>
                    </div>
                    <div className="col-3 col-busquedas"> 
                        <div className="col-search">
                            <input id="search-input" placeholder='BUSCAR'/>
                        </div>
                        <div className="col-user"><PopUser/></div>
                        <div className="col-carrito"><PopCarrito/></div>            
                    </div>
                </div>
                <div className="row row-RESPONSIVE-menu">
                    <div className='col-12' id="responsive-menu">
                        <div className='row'>
                            <div className="col-4 col-lg-4">  
                                <PopMenu showMenu={showMenu} setShowMenu={setShowMenu} openBackdrop={openBackdrop} setOpenBackdrop={setOpenBackdrop} handleHiddeMenu={handleHiddeMenu} handleShowMenu={handleShowMenu}/>
                            </div>
                            <div className="col-4 col-lg-4">
                                Logo
                            </div>
                            <div className="col-4 col-lg-4"> 
                                <div className="row">
                                    <div className="col-4"><PopSearch/></div>
                                    <div className="col-4 col-icon-user"><PopUser/></div>
                                    <div className="col-4 col-icon-carrito"><PopCarrito setShowMenu={setShowMenu} setOpenBackdrop={setOpenBackdrop}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12' id="row-search-res">
                        <InputGroup id="input-group-search">
                            <InputGroup.Text id="lupa">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="rgb(180, 179, 179)" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </InputGroup.Text>
                            <FormControl placeholder="BUSCAR" className='res-input-search'/>
                            <Button variant="light" id="cruz" onClick={handleCloseSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </Button>
                        </InputGroup>

                    </div>
                </div>
            </Fragment>);  
};

export default MainHeader;