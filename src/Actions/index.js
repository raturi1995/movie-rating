import {
  ADD_MOVIE_LIST,
  MODAL_OPEN_STATUS,
  CLEAR_MOVIE_LIST,
  SEARCH_KEY_INSERT,
  PAGE_NO_UPDATE,
  MOVIE_RESPONSE_STATUS,
  SELECTED_MOVIE_DETAILS
} from "../Constants/action-types";

export function addMovieList(payload) {
  return { type: ADD_MOVIE_LIST, payload };
}

export function modalStatusUpdate(payload) {
  return { type: MODAL_OPEN_STATUS, payload };
}

export function clearMovieList(payload) {
  return { type: CLEAR_MOVIE_LIST, payload };
}

export function searchKeyinsertion(payload) {
  return { type: SEARCH_KEY_INSERT, payload };
}

export function updatePageNo(payload) {
  return { type: PAGE_NO_UPDATE, payload };
}

export function movieResponseStatus(payload) {
  return { type: MOVIE_RESPONSE_STATUS, payload };
}

export function selectedMovieDetails(payload) {
  return { type: SELECTED_MOVIE_DETAILS, payload };
}
