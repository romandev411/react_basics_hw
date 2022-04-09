import './App.css';
import React from 'react';
import StatusWeather from './components/StatusWeather/StatusWeather';
import Lamp from './components/Lamp/Lamp';
import Pizza from './components/Pizza/Pizza';
import FormSandName from './components/FormSandName/FormSandName';

function App() {
  const elem = React.createElement('h1', null, 'Здравствуйте, пользователь');
  const ingredients = ["Мука", "Вода", "Яйца", "Томатная паста", "Пеперони", "Моцарелла"];

  return (
    <div className="App">
      {elem}

      <hr />

      <StatusWeather temperature={19} />

      <hr />
      
      <Lamp />

      <hr />

      <Pizza ingredients={ingredients} />

      <hr />

      <FormSandName />
    </div>
  );
}

export default App;
