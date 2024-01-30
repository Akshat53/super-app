import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      email: null,
      password: null,
    });

    if (formData.email === "" | formData.password === "") {
      setErrors((prev) => ({
        ...prev,
        email: "Email or User Name is required",
        password: "Password is required",
      }));
      return;
    }

   

    const storedData = JSON.parse(localStorage.getItem("userInfo"));

    if (
      formData.email !== storedData.email ||
      formData.password !== storedData.password
    ) {
      if (formData.email !== storedData.email) {
        setErrors((prev) => ({
          ...prev,
          email: "Email or User Name is incorrect",
        }));
      }

      if (formData.password !== storedData.password) {
        setErrors((prev) => ({
          ...prev,
          password: "Password is incorrect",
        }));
      }
    } else {
      navigate("/info");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Login</span>
      <Input
        type="text"
        placeholder={"Email Or User Name"}
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={errors.email?"error":""}
      />
      {errors.email}
      <Input
        type="password"
        placeholder={"Password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        className={errors.password?"error":""}
      />
      {errors.password}
      <Button label="Login" className="register-btn" type="submit" />
    </form>
  );
};

export default LoginForm;
