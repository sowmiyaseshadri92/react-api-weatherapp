import React from 'react';

const Weather =(props)=>{
    return(
         <div>
             <div className="container">
                 <div className="row">
                     <div className="col-4"></div>
                     <div className="col-4">
                     {props.city && props.country &&           
             <p>Location: {props.city} , {props.country}</p>}
             {props.temperature &&  
             <p>Temperature: {props.temperature}</p>}
             {props.humidity &&  
             <p>Humidity: {props.humidity}</p>}
             {props.description &&  
             <p>Condition: {props.description}</p>}
             {props.error &&  
             <p>{props.error}</p>}
                     </div>
                     <div className="col-4"></div>
                 </div>
             </div> 
            
         </div>
        );
    
}


export default Weather;