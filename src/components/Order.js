import React,  {Fragment} from 'react';
import Item from './Item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'

function Order() { 
  
    //Verde: en curso
    //Rojo: cancelado

  return (<Fragment>
            <div className="row row-cabecera-pedidos">
                <div className="col-12 col-sm-7 col-lg-6 col-xxl-4 col-number-order"># ORDER <span>12424521451FG7264H</span></div>
                <div className="col-sm-5 col-lg-3 col-xxl-4 col-estado-order">
                <FontAwesomeIcon icon={faCircle} size="1x" color="green" id="icon-circle-estado"/> En curso
                </div>
                <div className="col-lg-3 col-xxl-4 col-cancelar-pedido">
                    <button className="btn button-gestion">CANCELAR PEDIDO</button>
                </div>
            </div>
            <div className="row row-items-total">
                <div className="col-2"></div>
                <div className="col-8">
                    <Item></Item>
                    <Item></Item>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row row-pedido">
                <div className="col-12 row-estado-sm">
                    <FontAwesomeIcon icon={faCircle} size="1x" color="green" id="icon-circle-estado"/> En curso
                </div>
                <div className="col-12 col-xl-7">  
                    <div className="row">
                        <div className="col-12">
                            <span className='col-order'>Fecha de pedido:</span>
                            <span className='col-order-value'>10 May 2022</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span className='col-order'>Número de seguimiento:</span>
                            <span className='col-order-value'>sahjdb1274w74GH61</span>
                        </div>
                    </div>
                    <div className="row row-order">
                        <div className="col-12">
                            <span className='col-order'>Fecha aproximada de entrega:</span>
                            <span className='col-order-value'>12 May 2022</span>
                        </div>
                    </div>
                    <div className="row row-order">
                        <div className="col-12">
                            <span className='col-order'>Estado del pedido:</span>
                            <span className='col-order-value'>ENVIADO</span>
                        </div>  
                    </div>
                    <div className="row row-sm">
                        <div className="col-12 col-row-sm">
                            <button className="btn button-gestion">CANCELAR PEDIDO</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-5">
                    <div className="row row-envio-info">
                        <div className="col-12">
                            <div className="row row-info-individual"> 
                                <div className="col-12 col-md-5 col-lg-6 col-xl-2 col-info-icon">
                                    <FontAwesomeIcon icon={faUser} size="1x" color="grey" className='icon-pedido'/>
                                    <div className='texto-icon'>Cliente</div> 
                                </div>
                                <div className="col-12 col-md-7 col-lg-6 col-xl-10 col-info-icon-value">Nuria Villaronga Guillán</div>
                            </div>
                            <div className="row row-info-individual">
                                <div className="col-12 col-md-5 col-lg-6 col-xl-2 col-info-icon"> 
                                    <FontAwesomeIcon icon={faLocationDot} size="1x" color="grey" className='icon-pedido'/>
                                    <div className='texto-icon'>Dirección de entrega</div>
                                </div> 
                                <div className="col-12 col-md-7 col-lg-6 col-xl-10 col-info-icon-value">Alfredo Saralegui Nº12, Vilaxoán, 36611</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>);  
}; 

export default Order;