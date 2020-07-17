import React, { useState } from "react";
import "./Controls.css";
import Counter from "../Counter/Counter";
import { useEffect } from "react";

function Controls({
  airportCounter,
  cloudsCounter,
  onAirportIncrement,
  onAirportDecrement,
  onCloudsIncrement,
  onCloudsDecrement,
}) {
  return (
    <div className="controls-container">
      <Counter
        onIncrement={onAirportIncrement}
        onDecrement={onAirportDecrement}
        counterLabel={airportCounter.label}
        counterValue={airportCounter.value}
      />
      <Counter
        onIncrement={onCloudsIncrement}
        onDecrement={onCloudsDecrement}
        counterLabel={cloudsCounter.label}
        counterValue={cloudsCounter.value}
      />
    </div>
  );
}

export default Controls;
