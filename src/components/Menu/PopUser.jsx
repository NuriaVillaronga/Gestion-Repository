import React from 'react';
import { Dropdown } from 'react-bootstrap';

function PopUser() { 

    return (<Dropdown autoClose="inside">
                <Dropdown.Toggle id="dropdown-toggle-user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
                </Dropdown.Toggle> 
                <Dropdown.Menu id="dropdown-menu-user" align={{ lg: 'start' }}>  
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/pedidos">Pedidos</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>);  
};

export default PopUser;