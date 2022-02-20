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
  const [uName, setUName] = useState("");
  const [passw, setPassw] = useState("");
  const [errors, setErrors] = useState("");
  const [retStat, setRetStat] = useState(true);
  const isAuthenticated = useSelector(selectAuthStatus);
  const dispatch = useDispatch();
  const handleLogin = () => {
    //console.log({ username: username, password: password });
    // Allows for mocked override of authentication (but actual values cannot be gotten from the server bc of a lack of login)
    if (uName === "tempmail@temp.co" && passw === "temppass12") {
      dispatch(setPage(Pages.Dashboard));
    } else {
      setErrors("Incorrect username or password. Please try again. ");
    }
    // Actually checks for authentication with user and pass.
    setAuthStatus(submitLogin({ username: uName, password: passw }));
    if (isAuthenticated) {
      dispatch(setPage(Pages.Dashboard));
    } else {
      setErrors("OAUTH PROBLEMS ");
    }
  };

  // Go to register page
  const handleRegisterRedirect = () => {
    dispatch(setPage(Pages.Registration));
  };

  return (
    <div className="login-container auth-child flex-c">
      <div className="header-container flex-c">
        <h2 className="title">Login</h2>
        <p className="error-text text--red-dark">{errors}</p>
      </div>
      <div className="field-container flex-c">
        <TextField
          type={"email"}
          placeholder={"Enter your Email"}
          fieldValue={uName}
          setValue={(e) => setUName(e)}
        />
        <TextField
          type={"password"}
          placeholder={"Enter your Password"}
          fieldValue={passw}
          setValue={(e) => setPassw(e)}
        />
        <button
          className="btn btn-primary--blue-vibrant action-button all-caps"
          onClick={() => handleLogin()}
        >
          Sign In
        </button>
        <h3>{""}</h3>
        <button
          className="btn btn-secondary--blue-vibrant "
          onClick={() => handleRegisterRedirect()}
        >
          Don't Have an Account? Register Here
        </button>
      </div>
    </div>
  );
};

export default Login;
