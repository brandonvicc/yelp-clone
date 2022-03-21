import "./ReviewCard.css";
const ReviewCard = ({ review }) => {
  return (
    <li className="oneBus-review-card">
      <div className="oneBus-review-img-container">
        <img className="oneBus-review-img" src={review.img_link} alt="review" />
      </div>
      <div className="oneBus-review-content-container">
        <h3 className="oneBus-review-content-username">
          {review.User.username}
        </h3>
        <p className="oneBus-review-content-rating">Rating: {review.rating}</p>
        <div className="oneBus-review-content-created">
          Created At:
          <p> {new Date(review.createdAt).toDateString()}</p>
        </div>
        <div className="oneBus-review-content-review">
          <p>{review.review}</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
