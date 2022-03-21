import { csrfFetch } from "./csrf";

const ALL = "review/ALL";

const allReviews = (reviews) => ({
  type: ALL,
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
