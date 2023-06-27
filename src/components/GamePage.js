import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

function GamePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

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
