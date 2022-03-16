import { csrfFetch } from "./csrf";

const GET_ALL = "business/GET_ALL";

const allBusinesses = (businesses) => ({
  type: GET_ALL,
  businesses,
});

export const getAll = () => async (dispatch) => {
  const response = await csrfFetch("/api/businesses");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispatch(allBusinesses(data));
  }
  return response;
};

const initialState = {};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL:
      newState = { ...action.businesses };
      return newState;
    default:
      return state;
  }
}

export default reducer;
