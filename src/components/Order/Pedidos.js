import React from 'react';
import Order from './Order';
import { Breadcrumb } from 'react-bootstrap';

function Pedidos() { 

  return (<div className="row">
                <div className='col-12 container-breadcrumb'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/" className='breadcrumb-link'>HOME</Breadcrumb.Item>
                        <Breadcrumb.Item href="/login" className='breadcrumb-link'>LOGIN</Breadcrumb.Item>
                        <Breadcrumb.Item active className='breadcrumb-active'>PEDIDOS</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="col-12 container-specific-content">
                    <div className='row'>
                        <div className="col-12">MIS PEDIDOS</div>
                        <div className="col-12">Pedidos realizados en el último año</div>
                        <div className="row row-order-completo">
                            <div className="col-12 col-xxl-1"/>
                            <div className="col-12 col-xxl-10 col-order-inicial">
                                <Order/>
                            </div>
                            <div className="col-12 col-xxl-1"/>
                        </div>
                        <div className="col-12">Pagination</div>
                    </div>
                </div>
            </div>);  
}; 

export default Pedidos;