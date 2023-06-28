import React from "react";
import GamePage from "./GamePage";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/create">
          <GamePage />
        </Route>
        <Route exact path="/">
          <GamePage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
