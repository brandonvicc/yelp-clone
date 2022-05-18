import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateBusiness, getOneBusiness } from "../../../store/business";
import "./BusinessEditForm.css";

const BusinessEditForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneBusiness(id));
  }, [dispatch, id]);

  const current_user = useSelector((state) => state.session.user);
  const businessState = useSelector((state) => state.business.business);
  if (businessState !== undefined) {
    localStorage.setItem("business", JSON.stringify(businessState));
  }
  const business = JSON.parse(localStorage.getItem("business"));

  const [name, setName] = useState(business.name);
  const [address, setAddress] = useState(business.address);
  const [city, setCity] = useState(business.city);
  const [state, setState] = useState(business.state);
  const [country, setCountry] = useState(business.country);
  const [zipcode, setZipcode] = useState(business.zipcode);
  const [lat, setLat] = useState(business.lat);
  const [lng, setLng] = useState(business.lng);
  const [img_link, setImgLink] = useState(business.img_link);
  // const [img_link, setImgLink] = useState(null);
  const [errors, setErrors] = useState([]);
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

  if (business.userId !== current_user?.id) {
    history.push("/");
  }

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgLink(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      updateBusiness({
        id: id,
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
        history.push(`/businesses/${business.id}`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="editBus-form-container">
      <h1 className="editBus-header blue-font">Edit your Business</h1>

      <form onSubmit={handleSubmit} className="editBus-form">
        <ul className="error-list">
          {errors.map((error, idx) => (
            <li className="error-list-item" key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <label className="editBus-form-label">
          <p>Name of Business</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="editBus-form-label">
          <p>Address</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="editBus-form-label">
          <p>City</p>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="editBus-form-label">
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
        <label className="editBus-form-label">
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
        <label className="editBus-form-label">
          <p>Country</p>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label className="editBus-form-label">
          <p>Latitude</p>
          <input
            type="number"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="signup-input"
          />
        </label>
        <label className="editBus-form-label">
          <p>Longitude</p>
          <input
            type="number"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            className="signup-input"
          />
        </label>
        <label className="editBus-form-label">
          <p>Image</p>
          <input type="file" onChange={updateFile} className="signup-input" />
        </label>
        <div className="editBus-btn-container">
          <input
            type="submit"
            value="Edit your Business"
            className="editBus-submit-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default BusinessEditForm;
