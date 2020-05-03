import {
  UPDATE_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_PROFILES,
  GET_REPOS,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [], // profile listing page
  repos: [], // github repos
  loading: true, // change this once loading is done
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: {},
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        error: {},
        repos: [],
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    default:
      return state;
  }
}
