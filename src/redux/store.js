import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import stageReducer from "./slices/stageSlice";
import filterReducer from "./slices/filterSlice";
import consultationReducer from "./slices/consultationSlice";
import usersSlice, { ADD_USER, GET_USERS, REMOVE_USER, CHANGE_USER,
   getUsersSaga, addUsersSaga, deleteUsersSaga, changeUserSaga } from "./slices/usersSlice";
import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects';


const sagaMiddleware = createSagaMiddleware();

function* sagas(){
  yield takeEvery(GET_USERS, getUsersSaga)
  yield takeEvery(ADD_USER, addUsersSaga)
  yield takeEvery(REMOVE_USER, deleteUsersSaga)
  yield takeEvery(CHANGE_USER, changeUserSaga)
}

export const store = configureStore({
  devTools: true,
  reducer: {
    counter: counterReducer,
    stage: stageReducer,
    filter: filterReducer,
    consultations: consultationReducer,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);
