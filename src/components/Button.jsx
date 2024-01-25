import React from "react";

const Button = (props) => {
  const { label, onClick, className,type } = props;
  return (
    <button onClick={onClick} className={className} type={type}>
      {label}
    </button>
  );
};

export default Button;
