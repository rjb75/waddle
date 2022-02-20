import {
  selectAuthStatus,
  setAuthStatus,
  setToken,
} from "../../app/reducers/AuthenticationSlice";
import axiosFORMInst from "../../AxiosFORM";
import axiosJSONInst from "../../AxiosJSON";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../app/reducers/RoutingSlice";
import { Pages } from "../../pages/PageEnums";
export function passwordsMatch(props) {
  return props.password === props.confirmedPassword;
}

export const submitLogin = (props) => {
  let form = new FormData();
  form.append("username", props.username);
  form.append("password", props.password);
  axiosFORMInst
    .post("/token", form)
    .then((res) => {
      const userToken = res.data.access_token;
      console.log(userToken);
      setToken(userToken);
      setPage(Pages.Dashboard);
      return true;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.status);
      }
      return false;
    });
};

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
