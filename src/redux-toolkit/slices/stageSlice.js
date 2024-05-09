import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: "Stage1",
};

export const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    setStageForStore: (state, action) => {
      state.stage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStageForStore } = stageSlice.actions;

export default stageSlice.reducer;
