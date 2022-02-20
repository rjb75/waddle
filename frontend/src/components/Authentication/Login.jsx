import React from "react";
import { useState } from "react";
import TextField from "../Inputs/TextField";
import "./Authentication.scss";
import { submitLogin } from "./AuthenticationFunctions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleLogin = () => {
    console.log({ email: email, password: password });
    submitLogin({ email: email, password: password });
  };

  return (
    <div className="login-container auth-child flex-c">
      <div className="header-container flex-c">
        <h2 className="title">Login</h2>
        {errors && <p className="error-text text--red-dark">{errors}</p>}
      </div>
      <div className="field-container flex-c">
        <TextField
          type={"email"}
          placeholder={"Enter your Email"}
          fieldValue={email}
          setValue={(e) => setEmail(e)}
        />
        <TextField
          type={"password"}
          placeholder={"Enter your Password"}
          fieldValue={password}
          setValue={(e) => setPassword(e)}
        />
        <button
          className="btn btn-primary--blue-vibrant action-button all-caps"
          onClick={() => handleLogin()}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
