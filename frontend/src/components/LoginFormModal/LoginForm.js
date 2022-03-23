import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="login-modal-container">
      <h1 className="blue-font login-header">Log In</h1>
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li className="error-list-item" key={idx}>
            {error}
          </li>
        ))}
      </ul>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          <p>Username or Email</p>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            className="login-input"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </label>
        <button className="login-btn blue" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
