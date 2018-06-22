import React from 'react';

const Form = props => {
    
        return(
         <div>
            <div className="container">
          
                <div className="row">
                    
                    <div className="col-4"></div>
                    <div className=" col-sm-4">
                        
                        <form onSubmit={props.getWeather}>
                            <div className="form-group">
                            <label htmlFor="city" >Enter City</label>
                            <input type="text" name="city" className="form-control"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="city">Enter Country</label>
                            <input type="text" name="country" className="form-control"/>
                            </div>
                            <button className="btn btn-primary">Get Weather</button>
                        </form>
                    </div>
                    <div className="col-4"></div>
                   
                </div>
                
            </div> 
            
         </div>
        );
   
}


export default Form;