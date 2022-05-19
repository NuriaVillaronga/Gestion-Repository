import React from 'react';

function ItemInfoProduct(props) { 

    return (<div className={`row ${props.classCol}`}>
                <div className="col-12">{props.value}</div> 
            </div>);  
}; 

export default ItemInfoProduct;