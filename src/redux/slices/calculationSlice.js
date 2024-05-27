import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: 1,
  price: 0
};

export const calculationSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    setStageForCalc: (state, action) => {
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
export const { setStageForCalc, addPrice, decPrice } = calculationSlice.actions;

export default calculationSlice.reducer;