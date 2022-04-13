import React, { useState } from "react";
import * as reviewActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function ReviewEditForm({ reviewToEdit, closeModal, toggleOptions }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const curr_user = useSelector((state) => state.session.user);
  const { id } = useParams();
  const [review, setReview] = useState(reviewToEdit.review);
  const [rating, setRating] = useState(reviewToEdit.rating);
  const [img_link, setImgLink] = useState(reviewToEdit.img_link);
  const [errors, setErrors] = useState([]);

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgLink(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      reviewActions.updateReview({
        id: reviewToEdit.id,
        userId: curr_user?.id,
        businessId: id,
        review,
        rating,
        img_link,
      })
    )
      .then(async (data) => {
        await dispatch(reviewActions.getReviewsForBusiness(id));
        closeModal();
        toggleOptions();
        history.push(`/businesses/${id}`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="review-create-modal-container">
      <h1 className="blue-font review-create-header">Leave a Review</h1>
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li className="error-list-item" key={idx}>
            {error}
          </li>
        ))}
      </ul>
      <form className="review-create-form" onSubmit={handleSubmit}>
        <label className="review-create-label">
          <p>Rating</p>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            className="review-create-select"
          >
            <option className="review-create-option" value={0}>
              0
            </option>
            <option className="review-create-option" value={1}>
              1
            </option>
            <option className="review-create-option" value={2}>
              2
            </option>
            <option className="review-create-option" value={3}>
              3
            </option>
            <option className="review-create-option" value={4}>
              4
            </option>
            <option className="review-create-option" value={5}>
              5
            </option>
          </select>
        </label>
        <label className="review-create-label">
          <p>Add an Image</p>
          <input
            type="file"
            onChange={updateFile}
            className="review-create-input"
            required
          />
        </label>
        <label className="review-create-label">
          <p>Review</p>
          <textarea
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className="review-create-input review-create-textarea"
            placeholder="Leave a Review"
          ></textarea>
        </label>

        <button className="review-create-btn blue-btn" type="submit">
          Edit Review
        </button>
      </form>
    </div>
  );
}

export default ReviewEditForm;
