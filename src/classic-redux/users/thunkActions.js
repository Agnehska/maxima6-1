import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "./actionsCreators";

// export const fetchUserData = (userId) => {
//   console.log("thunkActions.js: fetchUserData", userId);
//   return (dispatch) => {
//     dispatch(fetchUserRequest());
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(fetchUserSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetchUserFailure(error.message));
//       });
//   };
// };

export const fetchUserData = (userId) => {
  return {
    type: "FETCH_USER_REQUEST",
    payload: userId,
  };
};
