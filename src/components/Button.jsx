import React from "react";

const Button = (props) => {
  const { label, onClick, className,type ,disabled} = props;
  return (
    <button onClick={onClick} className={className} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
