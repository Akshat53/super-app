import React from "react";

const Logo = (props) => {
  const { name, className } = props;
  return <h2 className={className}>{name}</h2>;
};

export default Logo;
