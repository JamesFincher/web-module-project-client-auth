import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { push } = useHistory();
  const [cred, setCredit] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredit({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/login", cred).then((res) => {
      localStorage.setItem("token", res.data.token);
      push("/friends");
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" onChange={handleChange} name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" onChange={handleChange} name="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
