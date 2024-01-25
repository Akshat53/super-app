import React from "react";

const Input = (props) => {
  const { type, value, onChange, className ,placeholder,id,name,checked} = props;
  return (
    <input
      checked={checked}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      id={id}
      name={name}
    />
  );
};

export default Input;
