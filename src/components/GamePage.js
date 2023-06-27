import React, { useEffect, useState } from "react";

function GamePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  const gamesToDisplay = games.map((game) => game.name);

  return <ul>{gamesToDisplay}</ul>;
}

export default GamePage;
