import React from 'react';

function TitleHeader(props) { 

  return (<div className="row" id={props.id}>
            <div className="col-12">
                {props.title} 
            </div>
        </div>);  
}; 

export default TitleHeader; 