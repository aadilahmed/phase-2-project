import React from "react";
import { Card, Image } from "semantic-ui-react";

function GameCard({ name, background_image, rating }) {
  return (
    // Each GameCard contains an image, name, and rating
    <Card textAlign="center">
      <div className="gamecard">
        <Image className="image" src={background_image} alt="" />
        <div className="name">{name}</div>
        <div className="rating">
          <i className="star icon" style={{ color: "gold" }} /> {rating} / 5
        </div>
      </div>
    </Card>
  );
}

export default GameCard;
