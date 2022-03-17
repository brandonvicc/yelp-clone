import * as businessActions from "../../store/business";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BusinessCard = ({ business }) => {
  const curr_user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(businessActions.deleteBusiness(business.id));
    history.push("/");
  };
  return (
    <li className="home-business-card">
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
      {curr_user?.id === business.userId && (
        <button className="home-delete-btn" onClick={handleDelete}>
          Delete
        </button>
      )}
    </li>
  );
};

export default BusinessCard;
