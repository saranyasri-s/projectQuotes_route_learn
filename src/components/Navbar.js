import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={classes.header}>
      <div>
        <h3>Great Quotes</h3>
      </div>
      <div className={classes.Links}>
        <NavLink activeClassName={classes.active} to="/All-Quotes">
          All Quotes
        </NavLink>
        <NavLink activeClassName={classes.active} to="/New-Quote">
          Add a new Quote
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
