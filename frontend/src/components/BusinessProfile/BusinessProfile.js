import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteOneBusiness, getOneBusiness } from "../../store/business";
import "./BusinessProfile.css";
import ReviewCard from "./ReviewCard/ReviewCard";

const BusinessProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const business = useSelector((state) => state.business.business);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneBusiness(id));
  }, [dispatch, id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteOneBusiness(business.id));
    history.push("/");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await dispatch(getOneBusiness(business.id));
    history.push(`/businesses/${business.id}/edit`);
  };

  return (
    <div className="oneBus-container">
      <div className="oneBus-img-container">
        <img className="oneBus-img" src={business?.img_link} alt="business" />
      </div>
      <div className="oneBus-info-container">
        <h1 className="oneBus-info-header blue-font">{business?.name}</h1>
        <div className="oneBus-info-content-container">
          <div className="oneBus-info-content">
            <h3 className="oneBus-info-content-header blue-font">Location</h3>
            <h5>Address</h5>
            <p className="oneBus-info">{business?.address}</p>
            <p className="oneBus-info">
              {business?.city}, {business?.state} {business?.zipcode}{" "}
              {business?.country}
            </p>
          </div>
          <div className="oneBus-info-actions">
            <button className="oneBus-edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="oneBus-delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="oneBus-review-container">
        <h3 className="oneBus-review-content-header blue-font">Reviews</h3>
        <ul className="oneBus-review-list">
          {business?.Reviews?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessProfile;
