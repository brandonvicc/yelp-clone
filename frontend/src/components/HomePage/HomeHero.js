import Searchbar from "../Searchbar/Searchbar";
import "./HomePage.css";
const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="home-hero-img-container">
        <div className="hero-cover">
          <h1 className="home-header logo-font">Yalp!</h1>
          <h3 className="home-header-promote blue-font">
            Promote Your Business!
          </h3>
          <h3 className="home-header-review blue-font">Review Businesses!</h3>
          <Searchbar />
        </div>
        <img
          className="home-hero-img"
          src="https://wallpapercave.com/dwp1x/wp1929358.jpg"
          alt="home-bg"
        />
      </div>
    </div>
  );
};

export default HomeHero;
