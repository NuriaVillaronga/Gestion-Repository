import React,  {Fragment} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemInfoIconOrder(props) { 

  return (<Fragment>
            <div className="row row-info-individual"> 
                <div className="col-12 col-md-5 col-lg-6 col-xl-2 col-info-icon">
                    <FontAwesomeIcon icon={props.icon} size="1x" color="grey" className='icon-pedido'/>
                </div>
                <div className="col-12 col-md-7 col-lg-6 col-xl-10 col-info-icon-value">{props.value}</div>
            </div> 
            <div className="row row-show-lg">
                <div className="col-12">
                    <span className="col-order">{props.title}:</span>
                    <span className='col-order-value'>{props.value}</span>
                </div>  
            </div>
            <div className="row row-show-sm">
                <div className="col-12 row-s-sm-t">{props.title}</div>  
                <div className="col-12 row-s-sm-v">{props.value}</div> 
            </div>
        </Fragment>);  
}; 

export default ItemInfoIconOrder;