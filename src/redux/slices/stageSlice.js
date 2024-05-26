import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: 1,
  price: 0
};

export const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    setStageForStore: (state, action) => {
      state.stage = action.payload;
    },
    addPrice: (stage, action) => {
      stage.price += action.payload;
    },
    decPrice: (stage, action) => {
      stage.price -= action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setStageForStore, addPrice, decPrice } = stageSlice.actions;

export default stageSlice.reducer;
