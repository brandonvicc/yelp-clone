import "./ReviewCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as reviewActions from "../../../store/review";
import ReviewEditModal from "../../ReviewEditModal";

const ReviewCard = ({ review }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showOptions, setShowOptions] = useState(false);
  // const [imgLink, setImgLink] = useState(review?.img_link);
  const curr_user = useSelector((state) => state.session.user);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(reviewActions.deleteOneReview(review.id));
    await dispatch(reviewActions.getReviewsForBusiness(id));
    toggleOptions();
  };

  let reviewOptions;
  if (curr_user?.id === review?.userId) {
    reviewOptions = (
      <div className="review-options-container">
        <FontAwesomeIcon
          className={
            showOptions
              ? "review-options-btn review-options-active"
              : "review-options-btn"
          }
          icon={faEllipsis}
          onClick={toggleOptions}
        />
        <div
          className={
            showOptions
              ? "review-options-actions options-active"
              : "review-options-actions"
          }
        >
          <ReviewEditModal review={review} toggleOptions={toggleOptions} />
          <button className="review-options-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  const handleLike = async (e) => {
    e.preventDefault();
    return dispatch(
      reviewActions.addLike({
        userId: curr_user?.id,
        businessId: id,
        reviewId: review?.id,
      })
    )
      .then(
        async (data) => await dispatch(reviewActions.getReviewsForBusiness(id))
      )
      .catch(async (res) => {
        // const data = await res.json();
        console.log(res);
        // if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <li className="oneBus-review-card">
      <div className="oneBus-review-img-container">
        <img
          className="oneBus-review-img"
          src={review.img_link}
          onError={(e) =>
            (e.target.src =
              "https://www.kindpng.com/picc/m/164-1646889_error-png-page-something-went-wrong-png-transparent.png")
          }
          alt="review"
        />
      </div>
      <div className="oneBus-review-content-container">
        <h3 className="oneBus-review-content-username">
          {review?.User?.username}
        </h3>
        {curr_user && reviewOptions}
        <p className="oneBus-review-content-rating">Rating: {review?.rating}</p>
        <div className="oneBus-review-content-likes">
          <form method="post" onSubmit={handleLike}>
            <button type="submit" className="oneBus-review-content-likes-btn">
              {review?.Likes?.length} <FontAwesomeIcon icon={faThumbsUp} />{" "}
            </button>
          </form>
        </div>
        <div className="oneBus-review-content-created">
          Created At:
          <p> {new Date(review?.createdAt).toDateString()}</p>
        </div>
        <div className="oneBus-review-content-review">
          <p>{review?.review}</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
