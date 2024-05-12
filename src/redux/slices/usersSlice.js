import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { uuid } from "../../api/helpers";


const initialState = {
  users: [],
  status: null,
  error: null
}
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function(){
    const response = await fetch('http://localhost:5000/users');

    const data = await response.json();

    return data;
  }
)

export const deleteUsers = createAsyncThunk(
  'users/deleteUsers',
  async function(id, {dispatch}){
    // const response = await fetch(`http://localhost:5000/users/${id}`,{
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // if (response.ok){
      dispatch(removeUser({id}));
    // }
  }
);

export const changeUser = createAsyncThunk(
  'users/changeUser',
  async function(user, {dispatch}){
    const response = await fetch(`http://localhost:5000/users/${user.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    if (response.ok){
      dispatch(newDataForUser({user}))
    }
  }
)

export const createUser = createAsyncThunk(
  'users/createUser',
  async function(user, {dispatch}){
    const response = await fetch(`http://localhost:5000/users`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    if (response.ok){
      dispatch(addUser({user}))
    }
  }
)

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.error.message;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state,{payload}){
      state.users.push(payload.user)
    },
    newDataForUser(state, {payload}){
      state.users = state.users.map(user => {
        if (user.id === payload.user.id){
          user = payload.user
        } 
        return user
      })
    },
    removeUser(state, {payload}){
      state.users = state.users.filter(user => user.id !== payload.id)
      console.log(state.users)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, setError);
    builder.addCase(deleteUsers.rejected, setError);
    builder.addCase(changeUser.rejected, setError);
    builder.addCase(createUser.rejected, setError);
  }
})

export const { removeUser, newDataForUser, addUser } = usersSlice.actions;

export default usersSlice.reducer;