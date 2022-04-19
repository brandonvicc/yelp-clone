import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Searchbar = () => {
  return (
    <>
      <div className="search-container">
        <div className="search-heading">Search by</div>
        <select className="search-select">
          <option>Business Name</option>
          <option>State</option>
          <option>Zipcode</option>
        </select>
        <form method="post">
          <input type="text" name="data" id="data" />
          <button className="search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
