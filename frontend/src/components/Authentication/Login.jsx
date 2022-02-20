import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { setPage } from "../../app/reducers/RoutingSlice";
import { setNickname } from "../../app/reducers/UserSlice";
import TextField from "../Inputs/TextField";
import "./Authentication.scss";
import { submitLogin } from "./AuthenticationFunctions";
import { Pages } from "../../pages/PageEnums";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthStatus,
  selectToken,
  setToken,
  setAuthStatus,
} from "../../app/reducers/AuthenticationSlice";
import axiosFORMInst from "../../AxiosFORM";
import axiosJSONInst from "../../AxiosJSON";

const Login = () => {
  const [uName, setUName] = useState("");
  const [passw, setPassw] = useState("");
  const [errors, setErrors] = useState("");
  const isAuthenticated = useSelector(selectAuthStatus);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();
  const handleLogin = () => {
    // Mouved out of AuthenticatonFunctions.jsx, because React doesn't like setting states inside try and catch statements.
    let form = new FormData();
    form.append("username", uName);
    form.append("password", passw);
    axiosFORMInst
      .post("/token", form)
      .then((res) => {
        const getNameString = "/users/" + uName;
        axiosJSONInst.get(getNameString).then((res) => {
          dispatch(setNickname(res.data.data.Name));
          console.log(res.data.data.Name);
        });
        const userToken = res.data.access_token;
        console.log(userToken);
        dispatch(setToken(userToken));
        dispatch(setPage(Pages.Dashboard));
        dispatch(setAuthStatus(true));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);
          setErrors(
            "Sorry, it looks like something went wrong. Please try again."
          );
        }
      });
  };

  useEffect(() => {
    setAuthStatus(isAuthenticated);
  }, [isAuthenticated]);

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
