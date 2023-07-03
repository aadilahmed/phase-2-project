import React from "react";
import { Card, Image } from "semantic-ui-react";

function GameCard({ name, background_image, rating }) {
  return (
    <Card textAlign="center">
        <Image className="image" src={background_image} alt=""/>
        <div className="name">{name}</div>
        <div className="rating"><i class="star icon" style={{ color: "gold" }} /> {rating} / 5</div>
    </Card>
  );
}

export default GameCard;
