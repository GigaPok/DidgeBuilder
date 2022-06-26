import React from "react";
import "./header.scss";
import logo from "../../assets/logo.png";

const header = () => {
  return (
    <header id="header">
      <a src="#">
        <img src={logo} alt="didge logo" />
      </a>
      <a href="/">Main Page</a>
      <a href="/Dashboard">Dashboard</a>
      <a href="/EditPage">Edit Page</a>
      <select>
        <option value="ENG">ENG</option>
        <option value="GE">GE</option>
      </select>
    </header>
  );
};

export default header;
