import "./HomePage.css";
const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="home-hero-img-container">
        <div className="hero-cover">
          <h1 className="home-header">Yalp!</h1>
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
