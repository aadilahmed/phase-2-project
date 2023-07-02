import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "semantic-ui-react";

const linkStyles = {
  display: "block",
  width: "100%",
  padding: "6px",
  //margin: "0 6px 6px",
  background: "rgba(11, 11, 11, 0)",
  textDecoration: "none",
  color: "aliceblue",
};

function NavBar() {
  return (
    <div className="sidebar">
      <Header style={{ color: "aliceblue" }}>
        <i class="gamepad icon" style={{ color: "#dc3545" }}></i>
        MyGameList
      </Header>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#dc3545",
          width: "100%",
        }}
      >
        <i class="home icon" style={{color: "aliceblue"}}></i>
        Home
      </NavLink>
      <NavLink
        to="/create"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#dc3545",
          width: "100%",
        }}
      >
        <i class="cloud upload icon" style={{color: "aliceblue"}}></i>
        Create
      </NavLink>
    </div>
  );
}

export default NavBar;
