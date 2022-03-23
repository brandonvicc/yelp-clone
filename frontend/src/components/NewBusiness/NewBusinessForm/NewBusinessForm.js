import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { newBusiness } from "../../../store/business";
import "./NewBusinessForm.css";

const NewBusinessForm = ({ current_user }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [img_link, setImgLink] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    console.log("submitted form");
    e.preventDefault();
    setErrors([]);
    return dispatch(
      newBusiness({
        name,
        address,
        city,
        state,
        country,
        zipcode,
        lat,
        lng,
        img_link,
        userId: current_user.id,
        avg_review: 0,
      })
    )
      .then((data) => {
        history.push("/");
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };
  return (
    <div className="newBus-form-container">
      <h1 className="newBus-header blue-font">Promote your Business</h1>

      <form onSubmit={handleSubmit} className="newBus-form">
        <ul className="error-list">
          {errors.map((error, idx) => (
            <li className="error-list-item" key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <label className="newBus-form-label">
          <p>Name of Business</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="newBus-form-label">
          <p>Address</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="newBus-form-label">
          <p>City</p>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="newBus-form-label">
          <p>State</p>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="newBus-form-label">
          <p>Zipcode</p>
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
            className="signup-input"
            inputMode="numeric"
          />
        </label>
        <label className="newBus-form-label">
          <p>Country</p>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="newBus-form-label">
          <p>
            Latitude <span className="optional">(optional)</span>
          </p>
          <input
            type="number"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="signup-input"
          />
        </label>
        <label className="newBus-form-label">
          <p>
            Longitude <span className="optional">(optional)</span>
          </p>
          <input
            type="number"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            className="signup-input"
          />
        </label>
        <label className="newBus-form-label">
          <p>Image</p>
          <input
            type="text"
            value={img_link}
            onChange={(e) => setImgLink(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <div className="newBus-btn-container">
          <input
            className="newBus-submit-btn"
            type="submit"
            value="Add your Business"
          />
        </div>
      </form>
    </div>
  );
};

export default NewBusinessForm;
