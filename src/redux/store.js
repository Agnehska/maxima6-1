import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import stageReducer from "./slices/stageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stage: stageReducer,
  },
});
