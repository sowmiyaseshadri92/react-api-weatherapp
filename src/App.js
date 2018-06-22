import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY="5c46a3c04b902820103a639dc74cd104";

class App extends React.Component{

  
state={
  temperature:undefined,
   city:undefined,
  country:undefined,
  description:undefined,
  humidity:undefined,  
  error:undefined,
}
  getWeather=async(e)=>{
      e.preventDefault();
      const city=e.target.elements.city.value;
      const country=e.target.elements.country.value;
      const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 
      const data=await api_call.json();
      if(city && country){
     // console.log(data);
      this.setState({
          temperature:data.main.temp,
          city: data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,      
          error:""
      });
    }
    else{
      this.setState({
        temperature:undefined,
        city: undefined,
        country:undefined,
        description:undefined,
        humidity:undefined,
        error:"Please Enter City,Country name..."
    });
    }
  }
  render(){
    return (
        <div className="container">
          <Title/>
          <Form getWeather={this.getWeather}/>
          
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            humidity={this.state.humidity}
            error={this.state.error}

          />
        </div>
    );
  }
};

export default App;