import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded, color }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ul className="nav-user-list">
        <li className={`nav-user-link${color}`}>
          <ProfileButton user={sessionUser} color={color} />
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
      <ul className="nav-user-list">
        <li className={`nav-user-link${color}`}>
          <LoginFormModal color={color} />
        </li>
        <li className={`nav-user-link${color}`}>
          <NavLink className={`nav-link${color}`} to="/signup">
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
          <NavLink className={"logo"} to={"/"}>
            <h2 className="logo-font">Yalp!</h2>
          </NavLink>
        </li>
        <li className="nav-link-item">
          <NavLink className={`nav-link${color}`} to={"/"}>
            View All Businesses
          </NavLink>
        </li>
        <li className="nav-link-item">
          <NavLink className={`nav-link${color}`} to={"/businesses/new"}>
            Post a Business
          </NavLink>
        </li>
      </ul>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
