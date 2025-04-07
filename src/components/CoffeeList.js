import React, { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import "../App.css";

const CoffeeList = ({ showAvailableOnly }) => {
  const [coffees, setCoffees] = useState([]); // State to store coffee data from API

  useEffect(() => {
    // Fetch coffee data from external JSON URL
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.error("Error fetching coffee data:", error));
  }, []);

  // Filter the coffee list if "Available Only" is selected
  const filteredCoffees = showAvailableOnly
    ? coffees.filter((coffee) => coffee.available)
    : coffees;

  return (
    <div className="coffee-list">
      {filteredCoffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeList;