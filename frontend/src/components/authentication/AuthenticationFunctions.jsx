import axiosFORMInst from "../../AxiosFORM";
import axiosInst from "../../AxiosJSON";

export function passwordsMatch(props) {
  return props.password === props.confirmedPassword;
}

export function submitLogin() {
  // const email = props.email;
  // const password = props.password;

  const testUser = { username: "johndoe", password: "secret" };
  let form = new FormData();
  form.append("username", testUser.username);
  form.append("password", testUser.password);
  axiosFORMInst
    .post("/token", form)
    .then(console.log("done"))
    .catch((err) => console.log(err));
}
