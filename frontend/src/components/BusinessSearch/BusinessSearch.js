import { useSelector, useDispatch } from "react-redux";

const BusinessSearch = () => {
  const businesses = useSelector((state) => state.business.businesses);
  return (
    <div className="search-container">
      <ul>
        {businesses?.map((business) => (
          <li>{business.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessSearch;
