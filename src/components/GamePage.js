import React from "react";
import GameCollection from "./GameCollection";
import { Container } from "semantic-ui-react";

function GamePage({ games }) {
  const gamesToDisplay = games;

  return (
    <div className="gamepage-container">
      <Container>
        <h1>MyGameList</h1>
        <br />
        <GameCollection games={gamesToDisplay} />
      </Container>
    </div>
  );
}

export default GamePage;
