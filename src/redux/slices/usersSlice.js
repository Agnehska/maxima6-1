import { createSlice, createAction } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";


const initialState = {
  users: [],
  status: null,
  error: null
}

export function* getUsersSaga(){
  const payload = yield fetch('http://localhost:5000/users').then(response => response.json());

  yield put(getUsersSuccess(payload))
}

export function* addUsersSaga(user){
  const payload = yield fetch('http://localhost:5000/users',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user.payload)
  }).then(response => response.json());

  yield put(addUser(payload))
}

export function* deleteUsersSaga(id){
  
  yield fetch(`http://localhost:5000/users/${id.payload}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  yield put(removeUser(id.payload))
}

export function* changeUserSaga(user){
  const payload = yield fetch(`http://localhost:5000/users/${user.payload.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user.payload)
    }).then(response => response.json());

  yield put(newDataForUser(payload))
}


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersSuccess(state, action){
      state.users = action.payload;
    },
    addUser(state,{payload}){
      state.users.push(payload)
    },
    newDataForUser(state, {payload}){
      console.log('wefwgef', payload)
      state.users = state.users.map(user => {
        if (user.id === payload.id){
          user = payload
        } 
        return user
      })
    },
    removeUser(state, {payload}){
      state.users = state.users.filter(user => user.id !== payload)
    }
  },
})

export const GET_USERS = 'users/getUsers';
export const getUsers = createAction(GET_USERS);

export const ADD_USER = 'users/addUsers';
export const addUsers = createAction(ADD_USER);

export const REMOVE_USER = 'users/removeUsers';
export const removeUsers = createAction(REMOVE_USER);

export const CHANGE_USER = 'users/changeUsers';
export const changeUsers = createAction(CHANGE_USER);

export const { removeUser, newDataForUser, addUser, getUsersSuccess } = usersSlice.actions;

export default usersSlice.reducer;