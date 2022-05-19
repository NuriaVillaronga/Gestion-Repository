import React from 'react';
import Login from './Login/Login';
import Pedidos from './Order/Pedidos';
import Register from './Register/Register';
import ResetPassword from './ResetPassword/ResetPassword';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function Content() { 

  return (<div className="row">
            <div className="col-1"></div>
            <div className="col-10">
                <Routes>
                    <Route exact path="/pedidos" element={<Pedidos/>}/>
                  <Route exact path="/login" element={<Login/>}/>
                  <Route exact path="/register" element={<Register/>}/>
                  <Route exact path="/reset-password" element={<ResetPassword/>}/>
                </Routes>
            </div>
            <div className="col-1"></div>
        </div>);  
}; 

export default Content;