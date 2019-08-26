import React from 'react';
import Titles from "./components/Titles";
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "6a57e5ac232be235638c6c132f0804f5";

class App extends React.Component {
  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=593116&APPID=${API_KEY}`);
    const data = await api_call.json();
  }
  render() {
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
};

export default App;