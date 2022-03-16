import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ul className="nav-user-list">
        <li className="nav-user-link">
          <ProfileButton user={sessionUser} />
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
      <ul className="nav-user-list">
        <li className="nav-user-link">
          <LoginFormModal />
        </li>
        <li className="nav-user-link">
          <NavLink className={"nav-link"} to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <div className="nav-bar-container">
      <ul className="nav-list">
        <li className="nav-link-item">
          <NavLink className={"nav-link"} to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="nav-link-item">
          <NavLink className={"nav-link"} to={"/"}>
            Write a Review
          </NavLink>
        </li>
        <li className="nav-link-item">
          <NavLink className={"nav-link"} to={"/"}>
            Post a Business
          </NavLink>
        </li>
      </ul>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
