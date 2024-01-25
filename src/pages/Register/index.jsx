import React, { useState } from "react";
import "./styles.css";
import Logo from "../../components/Logo";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  return (
    <div className="container">
      <div className="register-img">
        <h3>Discover new things on Superapp</h3>
      </div>
      <div className="register-form">
        <Logo name={"Super App"} className="register-logo" />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;
