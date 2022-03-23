import { csrfFetch } from "./csrf";

const ALL = "review/ALL";
const NEW = "review/NEW";
const DELETE = "review/DELETE";
const UPDATE = "review/UPDATE";
const ONEBUS_REVIEWS = "review/ONEBUS_REVIEWS";

const newReview = (review) => ({
  type: NEW,
  review,
});

const allReviews = (reviews) => ({
  type: ALL,
  reviews,
});

const oneDeleted = (review) => ({
  type: DELETE,
  review,
});

const reviewUpdated = (review) => ({
  type: UPDATE,
  review,
});

const reviewsForBusiness = (reviews) => ({
  type: ONEBUS_REVIEWS,
  reviews,
});

export const getAll = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");

  if (response.ok) {
    const data = await response.json();
    dispatch(allReviews(data));
  }
};

export const create = (payload) => async (dispatch) => {
  const response = await csrfFetch("/api/reviews/", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(newReview(data));
  }
  return response;
};

export const deleteOneReview = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(oneDeleted(data));
  }
};

export const updateReview = (review) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PUT",
    body: JSON.stringify(review),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(reviewUpdated(data.review));
  }
};

export const getReviewsForBusiness = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/businesses/${id}/reviews`);

  if (response.ok) {
    const data = await response.json();
    dispatch(reviewsForBusiness(data));
  }
};

const initialState = {};
const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ALL:
      newState = {};
      action.reviews.reviews.forEach(
        (review) => (newState[review.id] = { ...review })
      );
      return newState;
    case NEW:
      newState = { [action.review.id]: { ...action.review }, ...state };
      return newState;
    case DELETE:
      newState = { ...state };
      delete newState[action.review.id];
      return newState;
    case UPDATE:
      newState = {
        ...state,
        [action.review.id]: { ...action.review },
      };
      return newState;
    case ONEBUS_REVIEWS:
      newState = {};
      action.reviews.reviews.forEach(
        (review) => (newState[review.id] = { ...review })
      );
      return newState;
    default:
      return state;
  }
};

export default reducer;
