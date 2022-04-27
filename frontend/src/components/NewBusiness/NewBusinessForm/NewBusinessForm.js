import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { newBusiness } from "../../../store/business";
import "./NewBusinessForm.css";

const NewBusinessForm = ({ current_user }) => {
  const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states[0]);
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [img_link, setImgLink] = useState(null);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImgLink(file);
  };

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
          <select
            value={state}
            name="state"
            id="state"
            onChange={(e) => setState(e.target.value)}
            required
            className="signup-input"
          >
            {states.map((state, idx) => (
              <option key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>
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
          <p>
            Image{" "}
            <span className="optional">(Must add a picture to continue)</span>
          </p>
          <input
            type="file"
            onChange={updateFile}
            className={img_link ? "signup-input green" : "signup-input red"}
            required
          />
        </label>
        <div className="newBus-btn-container">
          <input
            className="newBus-submit-btn"
            type={img_link ? "submit" : "disabled red"}
            // type="submit"
            value="Add your Business"
          />
        </div>
      </form>
    </div>
  );
};

export default NewBusinessForm;
