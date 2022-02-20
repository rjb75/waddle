import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { setPage } from "../../app/reducers/RoutingSlice";
import TextField from "../Inputs/TextField";
import "./Authentication.scss";
import { submitLogin } from "./AuthenticationFunctions";
import { Pages } from "../../pages/PageEnums";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthStatus,
  setAuthStatus,
} from "../../app/reducers/AuthenticationSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedStat, setFailedStat] = useState(false);
  const [errors, setErrors] = useState("");
  const [retStat, setRetStat] = useState(true);
  const isAuthenticated = useSelector(selectAuthStatus);
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log({ email, password });
    if (email === "tempmail@temp.co" && password === "temppass12") {
      dispatch(setPage(Pages.Dashboard));
    } else {
      setFailedStat(true);
    }
    setAuthStatus(submitLogin(email, password));
    if (isAuthenticated) {
      dispatch(setPage(Pages.Dashboard));
    } else {
    }
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
        <h3>
          {failedStat ? "Incorrect username or password. Please try again" : ""}
        </h3>
      </div>
    </div>
  );
};

export default Login;
