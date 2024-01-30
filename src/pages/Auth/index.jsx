import React, { useState } from "react";
import "./styles.css";
import Logo from "../../components/Logo";
import RegistrationForm from "./RegistrationForm";

import LoginForm from "./LoginForm";

const Auth = (props) => {
  const {type="register"}= props
  return (
    <div className="container">
      <div className="register-img">
        <h3>Discover new things on Superapp</h3>
      </div>
      <div className="register-form">
        <Logo name={"Super App"} className="register-logo" />
        {type==="register" ?  <RegistrationForm />:<LoginForm />}
       
      </div>
    </div>
  );
};

export default Auth;
