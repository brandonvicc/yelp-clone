import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteOneBusiness, getOneBusiness } from "../../store/business";
import "./BusinessProfile.css";
import ReviewCard from "./ReviewCard/ReviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewCreateModal from "../ReviewCreateModal";

const BusinessProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const business = useSelector((state) => state.business.business);
  const curr_user = useSelector((state) => state.session.user);
  const { id } = useParams();
  const [avg, setAvg] = useState();

  useEffect(() => {
    dispatch(getOneBusiness(id));
  }, [dispatch, id]);

  useEffect(() => {
    const avgRating = function (reviews) {
      let total = 0;
      reviews?.forEach((review) => (total += review.rating));
      return total / reviews?.length;
    };

    setAvg(avgRating(business?.Reviews));
  }, [business?.Reviews, avg]);

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

  let actions;
  if (business?.userId === curr_user?.id) {
    actions = (
      <div className="oneBus-info-actions">
        <button className="oneBus-edit-btn" onClick={handleEdit}>
          Edit
        </button>
        <button className="oneBus-delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
  } else {
    actions = <ReviewCreateModal />;
  }

  return (
    <div className="oneBus-container">
      <div className="oneBus-img-container">
        <img className="oneBus-img" src={business?.img_link} alt="business" />
      </div>
      <div className="oneBus-info-container">
        <div className="oneBus-info-header-container">
          <h1 className="oneBus-info-header blue-font">
            {business?.name}{" "}
            <span className="oneBus-info-rating">
              <FontAwesomeIcon className="yellow" icon={faStar} />
              {avg ? avg.toFixed(2) : 0}
            </span>
          </h1>
        </div>
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
          {business && actions}
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
