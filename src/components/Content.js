import React from 'react';
import Login from './Login/Login';
import Pedidos from './Order/Pedidos';
import Register from './Register/Register';
import ResetPassword from './ResetPassword/ResetPassword';

function Content() { 

  return (<div className="row border">
            <div className="col-1"></div>
            <div className="col-10 border">
                <div className="row border row-pedidos-content">
                    <div className="col-12"><Pedidos/></div>
                </div>
                <Login/>
                <Register/>
                <ResetPassword/>
            </div>
            <div className="col-1"></div>
        </div>);  
}; 

export default Content;