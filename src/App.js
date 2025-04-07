import React, { useState } from "react";
import CoffeeList from "./components/CoffeeList";
import "./App.css";

const App = () => {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false); // State to control filtering

  return (
    <div className="app-container">
      <div className="header">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from different origins, expertly roasted for every taste.
        </p>
        <div className="controls">
          {/* Filter buttons to switch between all and available-only products */}
          <button
            className={!showAvailableOnly ? "active" : ""}
            onClick={() => setShowAvailableOnly(false)}
          >
            All Products
          </button>
          <button
            className={showAvailableOnly ? "active" : ""}
            onClick={() => setShowAvailableOnly(true)}
          >
            Available Only
          </button>
        </div>
      </div>
      <CoffeeList showAvailableOnly={showAvailableOnly} />
    </div>
  );
};

export default App;