const Registration = () => {
  return (
    <div>
      <label>
        <input type="type" name="email" placeholder="Enter your Email" />
      </label>
      <label>
        <input type="type" name="password" placeholder="Enter a Password" />
      </label>
      <label>
        <input
          type="type"
          name="password"
          placeholder="Confirm your Password"
        />
      </label>
      <label>
        <input type="type" name="name" placeholder="Enter your Name" />
      </label>
      <label>
        <input type="type" name="pin" placeholder="Create a 4-digit Pin" />
      </label>
    </div>
  );
};

export default Registration;
