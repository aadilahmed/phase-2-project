import React, { useState, useEffect } from "react";
import GameCollection from "./GameCollection";
import NavBar from "./NavBar";
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
      <NavBar />
      <GameCollection games={gamesToDisplay} />
    </Container>
  );
}

export default GamePage;
