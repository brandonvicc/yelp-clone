import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <div className="signup-header-content">
          <h1 className="signup-form-header blue-font">Sign Up</h1>
          <p className="signup-form-header-bold">
            <strong>Connect with great local businesses</strong>
          </p>
          <p className="signup-form-header-services">
            By continuing, you agree to Yalp's Terms of Service and acknowledge
            Yalp's Privacy Policy.
          </p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <ul className="error-list">
            {errors.map((error, idx) => (
              <li className="error-list-item" key={idx}>
                {error}
              </li>
            ))}
          </ul>
          <label>
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="signup-input"
            />
          </label>
          <label>
            <p>Username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="signup-input"
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signup-input"
            />
          </label>
          <label>
            <p>Confirm Password</p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="signup-input"
            />
          </label>
          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="img-section-container">
        <div className="signup-img-container">
          <img
            src="https://i.pinimg.com/originals/94/36/36/9436362ca6dfa4d4a60e42e5c636859f.jpg"
            alt="business open"
          />
        </div>
      </div>
    </div>
  );
}

export default SignupFormPage;
