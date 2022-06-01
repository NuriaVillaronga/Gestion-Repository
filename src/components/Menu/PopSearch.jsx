import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

function PopSearch() { 

    const handleShowBusqueda = () => {
        var res_search = document.getElementById("row-search-res");
        res_search.style.display = "flex"; 
        var res_menu = document.getElementById("responsive-menu");
        res_menu.style.display = "none"; 
    }

    return (<Fragment>
                <Button variant="light" onClick={handleShowBusqueda}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" id="icon-search">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </Button>
            </Fragment>);  
};

export default PopSearch; 