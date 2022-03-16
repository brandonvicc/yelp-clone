import "./HomePage.css";
import { useEffect } from "react";
import * as businessActions from "../../store/business";
import { useDispatch, useSelector } from "react-redux";
import HomeHero from "./HomeHero";

const HomePage = () => {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => state.business.businesses);
  console.log(businesses);
  useEffect(() => {
    dispatch(businessActions.getAll());
  }, [dispatch]);
  return (
    <div className="home-container">
      <HomeHero />
      <div className="home-business-container">
        <h1 className="home-business-header">Check out these new Businesses</h1>
        <ul>
          {businesses?.map((business) => (
            <li key={business.id}>
              <h3>{business.name}</h3>
              <img src={business.img_link} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
