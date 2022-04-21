import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import BusinessCard from "../BusinessCard/BusinessCard";
import Searchbar from "../Searchbar/Searchbar";
import "./BusinessSearch.css";

const BusinessSearch = () => {
  const businesses = useSelector((state) => state.business.businesses);
  const history = useHistory();

  if (!businesses) history.push("/");

  let results;
  if (businesses?.length) {
    results = (
      <div className="searchPage-results-container">
        <h1 className="searchPage-heading blue-font">Results</h1>
        <ul className="home-business-list">
          {businesses?.map((business) => (
            <BusinessCard business={business} />
          ))}
        </ul>
      </div>
    );
  } else {
    results = (
      <div className="no-results-container">
        <h1 className="searchPage-heading">No results found...</h1>
      </div>
    );
  }

  return (
    <div className="searchPage-container">
      <div className="searchPage-searchbar-container">
        <Searchbar page={"search-results"} />
      </div>
      {businesses && results}
    </div>
  );
};

export default BusinessSearch;
