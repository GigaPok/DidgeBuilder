import React from "react";
import "./button.scss";

const Button = (icon) => {
  return (
    <form className="customButton">
      <input placeholder="Search" />
      <button type="submit">
        <img src={icon.icon}></img>
      </button>
    </form>
  );
};

export default Button;
