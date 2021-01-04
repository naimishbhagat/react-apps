import React, { useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
function Login({ setUser }) {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post("login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setLogin(true);
        setUser(res.data.token);
      })
      .catch((err) => console.log(err));
  };
  if (login) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign up</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="****"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary btn-block" type="submit">
          Submit
        </button>
        <p className="forgot-password text-right">
          <Link to="/forgot">Forgot Password?</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
