import React from "react";
import { useState } from "react";
import TextField from "../Inputs/TextField";
import { submitRegistration } from "./AuthenticationFunctions";
import "./Authentication.scss";
import { useDispatch } from "react-redux";
import { setPage } from "../../app/reducers/RoutingSlice";
import { Pages } from "../../pages/PageEnums";
import axiosJSONInst from "../../AxiosJSON";

const Register = () => {
  var responseMessage = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [errors, setErrors] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState();
  const [attemptedRegister, setAttempedRegister] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrors("Passwords do not match");
      return;
    } else {
      setErrors("");
    }
    axiosJSONInst
      .post("/users", {
        email: email,
        password: password,
        username: name,
        pin: pin,
      })
      .then((res) => {
        setErrors("Account created! Please log in.");
        return;
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);
          setErrors("It looks like something went wrong. Please try again.");
          return;
        }
      });
  };

  // Go to login page
  const handLoginRedirect = () => {
    dispatch(setPage(Pages.Login));
  };

  // Handle confirming password
  const handleConfirmPassword = () => {
    if (password !== confirmPassword) {
      setErrors("Passwords do not match");
    } else {
      setErrors("");
    }
  };

  return (
    <div className="register-container auth-child flex-c">
      <div className="header-container flex-c">
        <h2 className="title">Register</h2>
        <p className="error-text text--red-dark">{errors}</p>
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
          onClick={() => handleConfirmPassword()}
        />
        <TextField
          type={"password"}
          placeholder={"Confirm your Password"}
          fieldValue={confirmPassword}
          setValue={(e) => setConfirmPassword(e)}
          onChange={() => handleConfirmPassword()}
        />
        <TextField
          type={"text"}
          placeholder={"Enter your name"}
          fieldValue={name}
          setValue={(e) => setName(e)}
        />
        <TextField
          type={"number"}
          placeholder={"Create a 4-digit pin"}
          fieldValue={pin}
          setValue={(e) => setPin(e)}
          inputmode={"numeric"}
        />
        <button
          className="btn btn-primary--blue-vibrant action-button all-caps"
          onClick={() => handleRegister()}
        >
          Sign Up
        </button>
        <h3>{responseMessage}</h3>
        <button
          className="btn btn-secondary--blue-vibrant "
          onClick={() => handLoginRedirect()}
        >
          Already Have an Account? Log-in Here
        </button>
      </div>
    </div>
  );
};

export default Register;
