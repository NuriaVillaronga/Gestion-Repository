import React,  {Fragment} from 'react';
import Item from './Item';

function Order() { 

  return (<Fragment>
            <div className="row border border">
                <div className="col-4 col-lg-6 col-xxl-4 col-number-order border"># ORDER <span>12424521451FG7264H</span></div>
                <div className="col-4 col-lg-3 col-xxl-4 col-estado-order border">
                    Enviado
                </div>
                <div className="col-4 col-lg-3 col-xxl-4 col-cancelar-pedido border">
                    <button className="btn button-gestion border">CANCELAR PEDIDO</button>
                </div>
            </div>
            <div className="row row-items-total border">
                <div className="col-12">
                    <Item></Item>
                    <Item></Item>
                </div>
            </div>
            <div className="row border row-pedido border">
                <div className="col-12 col-xxl-6  border">
                    <div className="row border">
                        <div className="col-12 col-md-6 col-order">Fecha de pedido</div>
                        <div className="col-12 col-md-6 col-order-value">10 May 2022</div>
                    </div>
                    <div className="row border">
                        <div className="col-12 col-md-6 col-order">Numero de seguimiento</div>
                        <div className="col-12 col-md-6 col-order-value">sahjdb1274w74GH61</div> 
                    </div>
                    <div className="row row-order border">
                        <div className="col-12 col-md-6 col-order">Fecha aproximada de entrega</div>
                        <div className="col-12 col-md-6 col-order-value">12 May 2022</div>
                    </div>
                    <div className="row row-order border">
                        <div className="col-12 col-md-6 col-order">Estado del pedido</div> 
                        <div className="col-12 col-md-6 col-order-value">ENVIADO</div>   
                    </div>
                </div>
                <div className="col-12 col-xxl-6 border">
                    <div className="row row-envio-info border">
                        <div className="col-12 border">
                            <div className="row row-info-individual border"> 
                                <div className="col-12 col-md-1 col-info-icon border">O</div>
                                <div className="col-12 col-md-11  border">Nuria Villaronga Guillán</div>
                            </div>
                            <div className="row row-info-individual border">
                                <div className="col-12 col-md-1 col-info-icon border">O</div> 
                                <div className="col-12 col-md-11  border">Alfredo Saralegui Nº12, Vilaxoán, Pontevedra, 36611</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>);  
}; 

export default Order;