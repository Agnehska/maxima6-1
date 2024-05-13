import {
  ADD_CONSULTATION,
  DECREMENT,
  DECREMENT_BY_AMOUNT,
  INCREMENT,
  INCREMENT_BY_AMOUNT,
  SET_STAGE_FOR_STORE,
  SET_STATUS_FOR_FILTER,
} from "./actions";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});

export const decrementByAmount = (amount) => ({
  type: DECREMENT_BY_AMOUNT,
  payload: amount,
});

export const addConsultation = (consultation) => ({
  type: ADD_CONSULTATION,
  payload: consultation,
});

export const setStatusForFilter = (filterType) => ({
  type: SET_STATUS_FOR_FILTER,
  payload: { filterType },
});

export const setStageForStore = (stage) => ({
  type: SET_STAGE_FOR_STORE,
  payload: stage,
});
