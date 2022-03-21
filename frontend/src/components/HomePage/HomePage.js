import "./HomePage.css";
import { useEffect } from "react";
import * as businessActions from "../../store/business";
import * as reviewActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import HomeHero from "./HomeHero";
import Footer from "../Footer/Footer";
import BusinessCard from "../BusinessCard/BusinessCard";

const HomePage = () => {
  const businesses = useSelector((state) => state.business.businesses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(businessActions.getAll());
    dispatch(reviewActions.getAll());
  }, [dispatch]);

  return (
    <div className="home-container">
      <HomeHero />
      <div className="home-business-container">
        <h1 className="home-business-header blue-font">
          Check out these new Businesses
        </h1>
        <ul className="home-business-list">
          {businesses?.map((business) => (
            <BusinessCard business={business} key={business.id} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
