import React from "react";
import GameCollection from "./GameCollection";
import { Container } from "semantic-ui-react";

function GamePage({ games }) {
  const gamesToDisplay = games;

  return (
    <Container>
      <h1>MyGameList</h1>
      <br />
      <GameCollection games={gamesToDisplay} />
    </Container>
  );
}

export default GamePage;
