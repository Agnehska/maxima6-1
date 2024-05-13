import { combineReducers } from "redux";

import {
  ADD_CONSULTATION,
  DECREMENT,
  DECREMENT_BY_AMOUNT,
  INCREMENT,
  INCREMENT_BY_AMOUNT,
  SET_STAGE_FOR_STORE,
  SET_STATUS_FOR_FILTER,
} from "./actions";
import sortTypes from "../components/Popular/Popular";
import usersReducer from "./users/usersReducer";

// Counter Reducer
const counterInitialState = { value: 0 };

function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT_BY_AMOUNT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
}

// Consultation Reducer
const consultationsInitialState = { consultations: [] };

function consultationReducer(state = consultationsInitialState, action) {
  switch (action.type) {
    case ADD_CONSULTATION:
      return {
        ...state,
        consultations: [...state.consultations, action.payload],
      };
    default:
      return state;
  }
}

// Filter Reducer
const filterInitialState = { filter: "all" };

function filterReducer(state = filterInitialState, action) {
  switch (action.type) {
    case SET_STATUS_FOR_FILTER:
      const newFilter =
        sortTypes.find((type) => type.status === action.payload.filterType)
          ?.title || state.filter;
      console.log("newFilter", newFilter);
      return { ...state, filter: newFilter };
    default:
      return state;
  }
}

// Stage Reducer
const stageInitialState = { stage: "Stage1" };
function stageReducer(state = stageInitialState, action) {
  switch (action.type) {
    case SET_STAGE_FOR_STORE:
      return { ...state, stage: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  consultations: consultationReducer,
  filter: filterReducer,
  stage: stageReducer,
  users: usersReducer,
});

export default rootReducer;
