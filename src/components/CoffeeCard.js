import React from "react";
import "../App.css";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="coffee-card">
      <div className="coffee-image-container">
        {/* Coffee image */}
        <img src={coffee.image} alt={coffee.name} className="coffee-image" />

        {/* Sold out label */}
        {!coffee.available && (
          <span className="sold-out">Sold out</span>
        )}

        {/* Popular label */}
        {coffee.popular && (
          <span className="popular">Popular</span>
        )}
      </div>

      <div className="coffee-details">
        <div className="coffee-header">
          <h3>{coffee.name}</h3>
          <span className="coffee-price">{coffee.price}</span>
        </div>

        {/* Coffee description */}
        <p className="coffee-description">{coffee.description}</p>

        {/* Rating section with stars and votes */}
        <div className="coffee-rating">
          <span className="stars">⭐ {coffee.rating}</span>
          <span className="votes">({coffee.votes} votes)</span>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;