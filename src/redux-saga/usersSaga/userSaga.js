import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_USER_REQUEST } from "../../classic-redux/users/actions";
import {
  fetchUserFailure,
  fetchUserSuccess,
} from "../../classic-redux/users/actionsCreators";

function* fetchUserSaga(action) {
  try {
    const response = yield call(
      fetch,
      `https://jsonplaceholder.typicode.com/users/${action.payload}`
    );

    const data = yield response.json();

    yield put(fetchUserSuccess(data));
    // console.log("saga");
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}
