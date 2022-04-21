import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { businessSearch } from "../../store/business";

const Searchbar = ({ page }) => {
  const [searchType, setSearchType] = useState("business");
  const [searchData, setSearchData] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    return dispatch(businessSearch({ searchType, searchData }))
      .then((data) => {
        history.push(`/businesses/results`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className={`search-container ${page}`}>
      <div className="search-heading">Search by</div>
      <form onSubmit={handleSubmit} method="post">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="search-select"
        >
          <option value="name">Business Name</option>
          <option value="state">State</option>
          <option value="zipcode">Zipcode</option>
        </select>
        <input
          type="text"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          name="data"
          id="data"
        />
        <button type="submit" className="search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li className="error-list-item" key={idx}>
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
