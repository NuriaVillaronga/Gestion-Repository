import React from 'react';

function ManagementButton(props) { 

        return (<div className={props.classCol}>
                <button className={`btn ${props.classBtn}`} id={props.id}>{props.value}</button>
            </div>);  
}; 

export default ManagementButton;