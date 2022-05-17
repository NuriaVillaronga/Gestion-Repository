import React from 'react';
import CreateAccount from './CreateAccount';
import Login from './Login';
import PasswordReset from './PasswordReset';
import Pedidos from './Pedidos';
import Register from './Register';

function Content() { 

  return (<div className="row border">
            <div className="col-1"></div>
            <div className="col-10 border">
                <div className="row border row-pedidos-content">
                    <div className="col-12"><Pedidos/></div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6"><Login/></div>
                    <div className="col-12 col-lg-6"><CreateAccount></CreateAccount></div>
                </div>
                <div className="row">
                    <div className="col-12 border"><Register></Register></div>
                </div>
                <div className="row">
                    <div className="col-12 border"><PasswordReset/></div>
                </div>
            </div>
            <div className="col-1"></div>
        </div>);  
}; 

export default Content;