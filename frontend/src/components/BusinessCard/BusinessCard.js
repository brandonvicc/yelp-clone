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

  const handleEdit = async (e) => {
    e.preventDefault();
    await dispatch(businessActions.getOneBusiness(business.id));
    history.push(`/businesses/${business.id}/edit`);
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
        <div className="home-business-card-actions">
          <button className="home-delete-btn" onClick={handleDelete}>
            Delete
          </button>
          <button className="home-edit-btn" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </li>
  );
};

export default BusinessCard;
