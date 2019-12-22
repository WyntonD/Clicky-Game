import React from "react";
import "../Header/header.css";

const Header = props => (
  <div className="header">
    <div className="title">Clicky Game: Kids Next Door!</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;