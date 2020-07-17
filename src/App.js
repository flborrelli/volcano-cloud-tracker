import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Controls from "./components/Controls/Controls";
import { useEffect } from "react";

function App() {

  const [airportCounter, setAirportCounter] = useState({
    id: 0,
    name: "airports",
    value: 3,
    minValue: 3,
    label: "Aeroportos",
  });

  const [cloudsCounter, setCloudsCounter] = useState({
    id: 1,
    name: "clouds",
    value: 4,
    minValue: 4,
    label: "Nuvens",
  });
  
  const handleAirportIncrement = () => {
    setAirportCounter({...airportCounter, value: airportCounter.value + 1})
  };

  const handleAirportDecrement = () => {
    setAirportCounter({...airportCounter, value: airportCounter.value - 1})
  };

  const handleCloudsIncrement = () => {
    setCloudsCounter({...cloudsCounter, value: cloudsCounter.value + 1})
  };

  const handleCloudsDecrement = () => {
    setCloudsCounter({...cloudsCounter, value: cloudsCounter.value - 1})
  };

  return (
    <div className="App">
      <Header />
      <Controls
        airportCounter={airportCounter}
        cloudsCounter={cloudsCounter}
        onAirportIncrement={handleAirportIncrement}
        onAirportDecrement={handleAirportDecrement}
        onCloudsIncrement={handleCloudsIncrement}
        onCloudsDecrement={handleCloudsDecrement}
      />
    </div>
  );
}

export default App;
