import { csrfFetch } from "./csrf";

const ALL = "review/ALL";
const ALL_FOR_ONE = "reviews/ALL_FOR_ONE";

const allReviews = (reviews) => ({
  type: ALL,
  reviews,
});

const allReviewsForOne = (reviews) => ({
  type: ALL_FOR_ONE,
  reviews,
});

export const getAll = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispatch(allReviews(data));
  }
};

export const getAllForOne = (businessId) => async (dispatch) => {
  const response = await csrfFetch("/api/");
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
    default:
      return state;
  }
};

export default reducer;
