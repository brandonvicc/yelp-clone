import { csrfFetch } from "./csrf";

const GET_ALL = "business/GET_ALL";
const NEW = "business/NEW";
const DELETE = "business/DELETE";
const ONE_DELETE = "business/ONE_DELETE";
const UPDATE = "business/UPDATE";
const GET_ONE = "business/GET_ONE";

const allBusinesses = (businesses) => ({
  type: GET_ALL,
  businesses,
});

const oneBusiness = (business) => ({
  type: GET_ONE,
  business,
});

const addBusiness = (business) => ({
  type: NEW,
  business,
});

const businessUpdated = (business) => ({
  type: UPDATE,
  business,
});

const businessDeleted = (business) => ({
  type: DELETE,
  business,
});

const oneDeleted = () => ({
  type: ONE_DELETE,
});

export const getOneBusiness = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/businesses/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(oneBusiness(data.business));
  }
};

export const deleteBusiness = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/businesses/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(businessDeleted(data));
  }
};
export const deleteOneBusiness = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/businesses/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    // const data = await response.json();
    dispatch(oneDeleted());
  }
};

export const getAll = () => async (dispatch) => {
  const response = await csrfFetch("/api/businesses");
  if (response.ok) {
    const data = await response.json();
    dispatch(allBusinesses(data));
  }
  return response;
};

export const newBusiness = (payload) => async (dispatch) => {
  const {
    name,
    userId,
    address,
    city,
    state,
    country,
    zipcode,
    lat,
    lng,
    avg_review,
    img_link,
  } = payload;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("userId", userId);
  formData.append("address", address);
  formData.append("city", city);
  formData.append("state", state);
  formData.append("country", country);
  formData.append("zipcode", zipcode);
  formData.append("lat", lat);
  formData.append("lng", lng);
  formData.append("avg_review", avg_review);
  formData.append("img_link", img_link);

  const response = await csrfFetch("/api/businesses/", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addBusiness(data.business));
  }
  return response;
};

export const updateBusiness = (business) => async (dispatch) => {
  const {
    id,
    name,
    userId,
    address,
    city,
    state,
    country,
    zipcode,
    lat,
    lng,
    avg_review,
    img_link,
  } = business;
  const formData = new FormData();
  formData.append("id", id);
  formData.append("name", name);
  formData.append("userId", userId);
  formData.append("address", address);
  formData.append("city", city);
  formData.append("state", state);
  formData.append("country", country);
  formData.append("zipcode", zipcode);
  formData.append("lat", lat);
  formData.append("lng", lng);
  formData.append("avg_review", avg_review);
  formData.append("img_link", img_link);

  const response = await csrfFetch(`/api/businesses/${business.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(businessUpdated(data.business));
  }
};

export const businessSearch = (payload) => async (dispatch) => {
  const response = await csrfFetch("/api/businesses/search", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(allBusinesses(data));
  }
};

const initialState = {};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL:
      newState = {};
      action.businesses.businesses.forEach((business) => {
        newState[business.id] = { ...business };
      });
      return { ...action.businesses, ...newState };
    case GET_ONE:
      newState = { business: { ...action.business } };
      return newState;
    case DELETE:
      newState = { ...state };
      delete newState[action.business.id];
      newState.businesses = newState.businesses.filter(
        (business) => business.id !== action.business.id
      );
      return newState;
    case ONE_DELETE:
      return {};
    case NEW:
      newState = { ...action.business };
      return newState;
    case UPDATE:
      newState = { ...action.business };
      return newState;
    default:
      return state;
  }
}

export default reducer;
