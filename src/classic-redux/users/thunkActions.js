import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "./actionsCreators";

export const fetchUserData = (userId) => (dispatch) => {
  dispatch(fetchUserRequest());

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchUserSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchUserFailure(error.message));
    });
};
