import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { deleteOneBusiness, getOneBusiness } from "../../store/business";
import "./BusinessProfile.css";
import ReviewCard from "./ReviewCard/ReviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewCreateModal from "../ReviewCreateModal";
import LoginFormModal from "../LoginFormModal";
import Footer from "../Footer/Footer";
import * as reviewActions from "../../store/review";

const BusinessProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const business = useSelector((state) => state.business.business);
  const curr_user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => Object.values(state.review));
  const { id } = useParams();
  const [avg, setAvg] = useState();

  useEffect(() => {
    const regex = /^[0-9]*$/;
    const checkId = id.match(regex);
    if (!checkId) return history.push("/the404");
    dispatch(getOneBusiness(id));
    dispatch(reviewActions.getReviewsForBusiness(id));
    console.log(business);
  }, [dispatch, id, history]);

  useEffect(() => {
    const avgRating = function (reviews) {
      let total = 0;
      reviews?.forEach((review) => (total += review.rating));
      return total / reviews?.length;
    };

    setAvg(avgRating(reviews));
  }, [reviews, avg]);

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
    if (curr_user) {
      actions = <ReviewCreateModal />;
    } else {
      actions = <LoginFormModal color={"-black"} />;
    }
  }
  let display;
  if (business === undefined) {
    display = <h1 className="not-found">Business Not Found</h1>;
    console.log(display);
  } else {
    display = (
      <>
        <div className="oneBus-img-container">
          <img className="oneBus-img" src={business?.img_link} alt="business" />
        </div>
        <div className="oneBus-info-container">
          <div className="oneBus-info-header-container">
            <h1 className="oneBus-info-header blue-font">
              {business?.name}{" "}
              <span className="oneBus-info-rating">
                <FontAwesomeIcon className="yellow" icon={faStar} />
                {avg ? avg.toFixed(2) : 0} ({reviews?.length})
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
            {reviews?.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </ul>
        </div>
      </>
    );
  }
  return (
    <div className="oneBus-container">
      {display}
      <Footer />
    </div>
  );
};

export default BusinessProfile;
