import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateBusiness, getOneBusiness } from "../../../store/business";

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
  const [errors, setErrors] = useState([]);

  if (business.userId !== current_user?.id) {
    history.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked edit");
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
      <form onSubmit={handleSubmit} className="editBus-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          <p>Name of Business</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label>
          <p>Address</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label>
          <p>City</p>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label>
          <p>State</p>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label>
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
        <label>
          <p>Country</p>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <label>
          <p>Latitude</p>
          <input
            type="number"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="signup-input"
          />
        </label>
        <label>
          <p>Longitude</p>
          <input
            type="number"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            className="signup-input"
          />
        </label>
        <label>
          <p>Image</p>
          <input
            type="text"
            value={img_link}
            onChange={(e) => setImgLink(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        <input type="submit" value="Edit your Business" />
      </form>
    </div>
  );
};

export default BusinessEditForm;
