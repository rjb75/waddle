import axiosFORMInst from "../../AxiosFORM";
import axiosJSONInst from "../../AxiosJSON";
import axiosInst from "../../AxiosJSON";

export function passwordsMatch(props) {
  return props.password === props.confirmedPassword;
}

export function submitLogin(props) {
  let form = new FormData();
  form.append("username", props.username);
  form.append("password", props.password);
  axiosFORMInst
    .post("/token", form)
    .then(console.log("done"))
    .catch((err) => console.log(err));
}

export function submitRegistration(props) {
  axiosJSONInst.post("/users", {
    email: props.email,
    password: props.password,
    username: props.username,
    pin: props.pin,
  });
}
