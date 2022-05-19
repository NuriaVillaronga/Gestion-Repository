import React,  {Fragment} from 'react';
import Item from './Item';
import { faCircle, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemInfoOrder from './ItemInfoOrder';
import ItemInfoIconOrder from './ItemInfoIconOrder';
import ManagementButton from '../ManagementButton';

function Order() { 
  
  return (<Fragment>
            <div className="row row-cabecera-pedidos">
                <div className="col-12 col-sm-7 col-lg-6 col-xxl-4 col-number-order"># ORDER <span>12424521451FG7264H</span></div>
                <div className="col-sm-5 col-lg-3 col-xxl-4 col-estado-order">
                    <FontAwesomeIcon icon={faCircle} size="1x" color="green" id="icon-circle-estado"/> En curso
                </div>
                <ManagementButton classCol="col-lg-3 col-xxl-4 col-cancelar-pedido" classBtn="button-gestion" id="" value="CANCELAR PEDIDO"/>
            </div>
            <div className="row row-items-total">
                <div className="col-12 col-lg-1 col-xxl-2"></div>
                <div className="col-12 col-lg-10 col-xxl-8">
                    <Item></Item>
                    <Item></Item>
                </div>
                <div className="col-12 col-lg-1 col-xxl-2"></div>
            </div>
            <div className="row row-pedido">
                <div className="col-12 row-estado-sm">
                    <FontAwesomeIcon icon={faCircle} size="1x" color="green" id="icon-circle-estado"/> En curso
                </div>
                <div className="col-12 col-xl-7">  
                    <ItemInfoOrder title="Fecha de pedido" value="10 May 2022"/>
                    <ItemInfoOrder title="Número de seguimiento" value="sahjdb1274w74GH61"/>
                    <ItemInfoOrder title="Fecha aproximada de entrega" value="12 May 2022"/>
                    <ItemInfoOrder title="Estado del pedido" value="ENVIADO"/>
                </div>
                <div className="col-12 col-xl-5">
                    <div className="row row-envio-info">
                        <div className="col-12">
                            <ItemInfoIconOrder icon={faUser} title="Cliente" value="Nuria Villaronga Guillán"/>
                            <ItemInfoIconOrder icon={faLocationDot} title="Dirección de envío" value="Alfredo Saralegui Nº12, Vilaxoán, 36611"/>
                        </div>
                    </div>
                    <div className="row row-sm">
                        <ManagementButton classCol="col-12 col-row-sm" classBtn="button-gestion" id="" value="CANCELAR PEDIDO"/>
                    </div>
                </div>
            </div>
        </Fragment>);  
}; 

export default Order;