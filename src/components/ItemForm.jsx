import React from 'react';

function ItemForm(props) { 

        return (<div className={props.classCol}>
                    <label className="form-label">{props.title}</label>
                    <input className="form-control" type={props.type} placeholder={props.placeholder}/>
                </div>); 
}; 

export default ItemForm;