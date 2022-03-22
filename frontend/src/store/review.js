import { csrfFetch } from "./csrf";

const ALL = "review/ALL";
const NEW = "review/NEW";
const DELETE = "review/DELETE";
const UPDATE = "review/UPDATE";

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

export const getAll = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");

  if (response.ok) {
    const data = await response.json();
    console.log(data);
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
    // const data = await response.json();
    dispatch(oneDeleted());
  }
};

export const updateReview = (review) => async (dispatch) => {
  console.log(review);
  const response = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PUT",
    body: JSON.stringify(review),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(reviewUpdated(data.review));
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
      newState = { ...action.review };
      return newState;
    case DELETE:
      newState = {};
      return newState;
    case UPDATE:
      newState = { ...action.business };
      return newState;
    default:
      return state;
  }
};

export default reducer;