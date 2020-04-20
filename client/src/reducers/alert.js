import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

// takes in state and action
// changes state based on action

// state is immutable.
// need to create a new copy and replace

// this is just for alerts
// { id, message, alertType } is the alert payload
const initialState = [];

// action has type and data.
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload); // payload is just the id for this
    default:
      return state;
  }
}
