import {
  ADD_MOVIE_LIST,
  MODAL_OPEN_STATUS,
  SEARCH_KEY_INSERT,
  CLEAR_MOVIE_LIST,
  PAGE_NO_UPDATE,
  MOVIE_RESPONSE_STATUS,
  SELECTED_MOVIE_DETAILS
} from "../Constants/action-types";
const initialState = {
  store_movielist: [],
  store_apikey: "22f03946",
  store_totalresult: "",
  store_search_key: "india",
  store_page_No: 1,
  store_selected_movie_details: "",
  store_modalopen: "",
  store_movielist_reponse: ""
};

function reducer(state = initialState, action) {
  if (action.type === ADD_MOVIE_LIST) {
    return {
      ...state,
      store_movielist: state.store_movielist.concat(action.payload)
    };
  }

  if (action.type === MODAL_OPEN_STATUS) {
    return {
      ...state,
      store_modalopen: action.payload
    };
  }
  if (action.type === SEARCH_KEY_INSERT) {
    return {
      ...state,
      store_search_key: action.payload
    };
  }
  if (action.type === CLEAR_MOVIE_LIST) {
    return {
      ...state,
      store_movielist: []
    };
  }
  if (action.type === PAGE_NO_UPDATE) {
    return {
      ...state,
      store_page_No: action.payload
    };
  }
  if (action.type === MOVIE_RESPONSE_STATUS) {
    return {
      ...state,
      store_movielist_reponse: action.payload
    };
  }
  if (action.type === SELECTED_MOVIE_DETAILS) {
    return {
      ...state,
      store_selected_movie_details: action.payload
    };
  }

  return state;
}

export default reducer;
