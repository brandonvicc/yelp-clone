import React, { useState } from "react";
import * as reviewActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import "./ReviewCreateForm.css";

function ReviewCreateForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const curr_user = useSelector((state) => state.session.user);
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [img_link, setImgLink] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      reviewActions.create({
        userId: curr_user.id,
        businessId: id,
        review,
        rating,
        img_link,
      })
    )
      .then((data) => {
        history.push(`/businesses/${id}`);
        window.location.reload(true);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="review-create-modal-container">
      <h1 className="blue-font review-create-header">Leave a Review</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
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
            type="text"
            value={img_link}
            onChange={(e) => setImgLink(e.target.value)}
            required
            className="review-create-input"
            placeholder="Add an image url"
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

        <button className="review-create-btn blue" type="submit">
          Add Review
        </button>
      </form>
    </div>
  );
}

export default ReviewCreateForm;
