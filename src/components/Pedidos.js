import React,  {Fragment} from 'react';
import Order from './Order';

function Pedidos() { 

  return (<Fragment>
            <div className="row">
                <div className="col-12">MIS PEDIDOS</div>
            </div>
            <div className="row">
                <div className="col-12">Pedidos realizados en el último año</div>
            </div>
            <div className="row row-order-completo">
                <div className="col-12 col-xxl-1"></div>
                <div className="col-12 col-xxl-10 col-order-inicial">
                    <Order></Order>
                </div>
                <div className="col-12 col-xxl-1"></div>
            </div>
        </Fragment>);  
}; 

export default Pedidos;