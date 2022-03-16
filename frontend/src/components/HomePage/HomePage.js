import "./HomePage.css";
import { useEffect } from "react";
import * as businessActions from "../../store/business";
import { useDispatch, useSelector } from "react-redux";
import HomeHero from "./HomeHero";
import Footer from "../Footer/Footer";

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
        <h1 className="home-business-header blue-font">
          Check out these new Businesses
        </h1>
        <ul className="home-business-list">
          {businesses?.map((business) => (
            <li className="home-business-card" key={business.id}>
              <h3 className="home-business-card-title">{business.name}</h3>
              <div className="home-business-img-container">
                <img
                  className="home-business-img"
                  src={business.img_link}
                  alt="business"
                />
              </div>
              <div className="home-business-card-content">
                <p>Rating: {business.avg_review}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
