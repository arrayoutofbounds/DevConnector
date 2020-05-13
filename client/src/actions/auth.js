import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

// load user from database into frontend redux store
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data, //user data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// register user
// this calls the api and dispatches action accordingly.
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors; // gets errors given by api endpoint
    if (errors) {
      // redux thunk can call other action creators from dispatch
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

// login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors; // gets errors given by api endpoint
    if (errors) {
      // redux thunk can call other action creators from dispatch
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

// logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT,
  });
};
