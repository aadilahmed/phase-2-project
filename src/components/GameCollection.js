import React from "react";
import GameCard from "./GameCard";
import { Card } from "semantic-ui-react";

function GameCollection({ games }) {
  const gamesToDisplay = games.map((game) => (
    <GameCard
      key={game.id}
      name={game.name}
      background_image={game.background_image}
      rating={game.rating}
    />
  ));

  return <Card.Group itemsPerRow={4}>{gamesToDisplay}</Card.Group>;
}

export default GameCollection;
