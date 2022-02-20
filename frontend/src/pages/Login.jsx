const Login = () => {
  return (
    <div>
      <form>
        <label>
          <input type="type" name="email" placeholder="Enter your Email" />
        </label>
        <label>
          <input
            type="type"
            name="password"
            placeholder="Enter your Password"
          />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
