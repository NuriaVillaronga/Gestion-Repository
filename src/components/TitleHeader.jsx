import React from 'react';

function TitleHeader(props) { 

  return (<div className="row row-title border">
            <div className="col-12">
                <h4>{props.title}</h4> 
            </div>
        </div>);  
}; 

export default TitleHeader; 