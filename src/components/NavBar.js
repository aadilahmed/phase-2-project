import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "block",
  width: "50px",
  padding: "6px",
  margin: "0 6px 6px",
  background: "rgba(11, 11, 11, 0)",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="sidebar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/create"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Create
      </NavLink>
    </div>
  );
}

export default NavBar;
