import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    password:"",
    sharedData: false,
  });

  const [error, setError] = useState({
    name: null,
    userName: null,
    email: null,
    mobile: null,
    password:null,
    sharedData: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;
    if (formData.name.trim().length == 0) {
      setError((prev) => {
        return { ...prev, name: "Enter Name" };
      });
      isError = true;
    } else {
      setError((prev) => {
        return { ...prev, name: null };
      });
    }
    if (formData.email.trim().length == 0) {
      setError((prev) => {
        return { ...prev, email: "Enter email" };
      });
      isError = true;
    } else {
      setError((prev) => {
        return { ...prev, email: null };
      });
    }
    if (formData.mobile.trim().length == 0) {
      setError((prev) => {
        return { ...prev, mobile: "Enter Mobile Number" };
      });
      isError = true;
    } else {
      setError((prev) => {
        return { ...prev, mobile: null };
      });
    }
    if (formData.userName.trim().length == 0) {
      setError((prev) => {
        return { ...prev, userName: "Enter User Name" };
      });
      isError = true;
    } else {
      setError((prev) => {
        return { ...prev, userName: null };
      });
    }
    if (formData.password.trim().length == 0) {
      setError((prev) => {
        return { ...prev, password: "Enter password" };
      });
      isError = true;
    } else {
      setError((prev) => {
        return { ...prev, password: null };
      });
    }
    if (formData.sharedData === false) {
      setError((prev) => {
        return { ...prev, sharedData: "Please Check The Box" };
      });
      isError = true;
    } else {
      setError((prev) => {
        return { ...prev, sharedData: null };
      });
    }
    if (isError) {
      return;
    } else {
      window.localStorage.setItem("userInfo", JSON.stringify(formData));
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Create your new account</span>
      <Input
        type="text"
        placeholder={"Name"}
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={error.name ? "error" : ""}
      />
      {error.name}
      <Input
        type="text"
        placeholder={"User Name"}
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        className={error.userName ? "error" : ""}
      />
      {error.userName}
      <Input
        type="email"
        placeholder={"Email"}
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={error.email ? "error" : ""}
      />
      {error.email}
      <Input
        type="text"
        placeholder={"Mobile"}
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className={error.mobile ? "error" : ""}
      />
      {error.mobile}
      <Input
        type="password"
        placeholder={"Password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        className={error.mobile ? "error" : ""}
      />
      {error.password}
      <label htmlFor="check">
        <Input
          type="checkbox"
          id="check"
          className="checkbox"
          name="sharedData"
          value={formData.sharedData}
          onChange={handleChange}
        />
        Share my registration data with Superapp
      </label>
      {error.sharedData}
      <Button label="Signup" className="register-btn" type="submit" />
    </form>
  );
};

export default RegistrationForm;
