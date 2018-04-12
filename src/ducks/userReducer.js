import axios from "axios";

const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/me")
      .then(response => {
        return response.data;
      })
      .catch(err => err)
  };
}

const initialState = {
  user: {},
  isLoading: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    default:
      return state;
  }
}
