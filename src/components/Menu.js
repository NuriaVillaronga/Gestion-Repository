import React from 'react';
import { Link } from 'react-router-dom';

function Menu() { 

  return (<div className="row menu-row">
            <div className="col-12 sub-header-row"></div>
            <div className="col-12 header-row">
                <div className="row">
                    <div className="col-9 logo">G15VN89</div>
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
                </div>
            </div>
    </div>);  
}; 

export default Menu;