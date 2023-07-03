import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "semantic-ui-react";

const linkStyles = {
  display: "block",
  width: "100%",
  padding: "10px",
  background: "rgba(11, 11, 11, 0)",
  textDecoration: "none",
  color: "aliceblue",
};

function NavBar() {
  return (
    <div className="sidebar">
      <Header style={linkStyles}>
        <i className="gamepad icon" style={{ color: "#dc3545" }}></i>
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
        <i className="home icon" style={{ color: "aliceblue" }} />
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
        <i className="cloud upload icon" style={{ color: "aliceblue" }} />
        Create
      </NavLink>
    </div>
  );
}

export default NavBar;
