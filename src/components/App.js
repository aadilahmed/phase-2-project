import React, { useState, useEffect } from "react";
import GamePage from "./GamePage";
import GameForm from "./GameForm";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  const [games, setGames] = useState([]);

  // Load game list on app startup
  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  function handleAddGame(newGame) {
    setGames([...games, newGame]);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/create">
          <GameForm onCreateGame={handleAddGame} />
        </Route>
        <Route exact path="/">
          <GamePage games={games} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
