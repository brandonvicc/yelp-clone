import { csrfFetch } from "./csrf";

const GET_ALL = "business/GET_ALL";
const NEW = "business/NEW";

const allBusinesses = (businesses) => ({
  type: GET_ALL,
  businesses,
});

const addBusiness = (business) => ({
  type: NEW,
  business,
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

export const newBusiness = (payload) => async (dispatch) => {
  console.log(payload);
  const response = await csrfFetch("/api/businesses/", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const data = await response.json();
    console.log(response.business);
    dispatch(addBusiness(data.business));
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
    case NEW:
      newState = { ...action.business };
      return newState;
    default:
      return state;
  }
}

export default reducer;
