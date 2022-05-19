import React from 'react';
import { Link } from 'react-router-dom';

function Menu() { 

  return (<div className="row header-row">
            <div className="col-9">Logo</div>
            <div className="col-1">
                <Link to="/login">
                    <button type="button">USER</button>
                </Link>
            </div>
            <div className="col-1">
                <Link to="/pedidos">
                    <button type="button">PEDIDOS</button>
                </Link>
            </div>
            <div className="col-1">Exit</div>
        </div>);  
}; 

export default Menu;