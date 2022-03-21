import { csrfFetch } from "./csrf";

const ALL = "review/ALL";
const NEW = "review/NEW";

const newReview = (review) => ({
  type: NEW,
  review,
});

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
    default:
      return state;
  }
};

export default reducer;
