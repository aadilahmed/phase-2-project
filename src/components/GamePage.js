import React, { useState } from "react";
import GameCollection from "./GameCollection";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function GamePage({ games }) {
  const [query, setQuery] = useState("");
  const gamesToDisplay = games.filter((game) => game.name.includes(query));

  return (
    <div className="gamepage-container">
      <Container>
        <h1 className="header">Games</h1>
        <Search query={query} onQuery={setQuery} />
        <br />
        <GameCollection games={gamesToDisplay} />
      </Container>
    </div>
  );
}

export default GamePage;
