import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import stageReducer from "./slices/stageSlice";
import filterReducer from "./slices/filterSlice";
import consultationReducer from "./slices/consultationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stage: stageReducer,
    filter: filterReducer,
    consultations: consultationReducer,
  },
});
