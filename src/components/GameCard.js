import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";

function GameCard({ name, background_image, rating }) {
  return (
    <Card>
      <div>
        <img className="image" src={background_image} alt="" />
        <div className="name">{name}</div>
        <div className="rating">{rating}</div>
      </div>
    </Card>
  );
}

export default GameCard;
