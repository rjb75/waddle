import {
  setAuthStatus,
  setToken,
} from "../../app/reducers/AuthenticationSlice";
import axiosFORMInst from "../../AxiosFORM";
import axiosJSONInst from "../../AxiosJSON";

export function passwordsMatch(props) {
  return props.password === props.confirmedPassword;
}

export function submitLogin(props) {
  let form = new FormData();
  var respStatus;
  var returnStat;
  form.append("username", props.username);
  form.append("password", props.password);
  axiosFORMInst
    .post("/token", form)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.status);
      // console.log(res.statusText);
      // console.log(res.headers);
      // console.log(res.config);
      respStatus = res.status;
      const userToken = JSON.parse(res.data).access_token;
      console.log();
      setToken(userToken);
      setAuthStatus(true);
      return true;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.status);
        returnStat = false;
      }
      // console.log(err.status);
      // console.log(err.statusText);
      // console.log(err.headers);
      // console.log(err.config);
      respStatus = err.statusTest;
    });
  return returnStat;
}

export function submitRegistration(props) {
  axiosJSONInst
    .post("/users", {
      email: props.email,
      password: props.password,
      username: props.username,
      pin: props.pin,
    })
    .then((res) => {
      return true;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.status);
        return false;
      }
      console.log(JSON.stringify(err.toJSON()));
      console.log(err.status);
      console.log(err.statusText);
      console.log(err.headers);
      console.log(err.config);
    });
}
