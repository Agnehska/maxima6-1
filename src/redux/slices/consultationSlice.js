import { createSlice } from "@reduxjs/toolkit";

export const consultationSlice = createSlice({
  name: "consultations",
  initialState: {
    consultations: [],
  },
  reducers:{
    addConsultation(state, action){
      state.consultations.push(action.payload)
    }
  }
});

export const {addConsultation} = consultationSlice.actions;
export default consultationSlice.reducer;