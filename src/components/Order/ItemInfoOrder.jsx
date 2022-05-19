import React,  {Fragment} from 'react';

function ItemInfoOrder(props) { 

  return (<Fragment>
            <div className="row row-order">
                <div className="col-12">
                    <span className='col-order'>{props.title}:</span>
                    <span className='col-order-value'>{props.value}</span>
                </div>  
            </div>
            <div className="row row-show-sm">
                <div className="col-12 row-s-sm-t">{props.title}</div>  
                <div className="col-12 row-s-sm-v">{props.value}</div> 
            </div>
        </Fragment>);  
}; 

export default ItemInfoOrder;