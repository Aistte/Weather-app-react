import React from 'react';
import Titles from "./components/Titles";
import Form from './components/Form';
import Weather from './components/Weather';
import './index.css'

const API_KEY = "6a57e5ac232be235638c6c132f0804f5";

// weather.js ir error
// temperature, city, country, humidity, weather: description, wind:speed
// STATE PASIKEICIA PASPAUDUS MYGTUKA
// 2 errors - kai neirasyta info ir kai neteisinga info

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    humidity: undefined,
    speed: undefined,
    error: undefined,
  }
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // const data = await api_call.json();

    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`).then(data=> {
      console.log(data);
      data.json()
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        error:"",
      });
    }).catch(error=> {
      this.setState({
        error: error.message
      })
    })

    console.log(data);


    // if (city && country) { //Jei false(no name value ir no country value), si dalis nieko nedarys //
    //   console.log(data);
    //   this.setState({
    //     city: data.name,
    //     country: data.sys.country,
    //     temperature: data.main.temp,
    //     description: data.weather[0].description,
    //     humidity: data.main.humidity,
    //     speed: data.wind.speed,
    //     error:"",
    //   });
    // } else {            //Error 
    //   this.setState({
    //     error: "Please fill the forms",
    //   });
    // }
  } 

  render() {
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
        //Props, naudosiu weather.js
        city={this.state.city}
        country={this.state.country}
        temperature={this.state.temperature}
        description={this.state.description}
        humidity={this.state.humidity}
        speed={this.state.speed}
        error={this.state.error}
        />
      </div>
    );
  }
};

export default App;