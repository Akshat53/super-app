import React from "react";
import "./styles.css";

const Logo = (props) => {
  const { className } = props;
  return <h2 className={`${className} logo`}>Super App</h2>;
};

export default Logo;
