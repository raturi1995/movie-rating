import Axios from "axios";
import {
  addMovieList,
  updatePageNo,
  movieResponseStatus,
  selectedMovieDetails,
  modalStatusUpdate
} from "../Actions/index";

export function fetchMovieList(searchkey, PageNo, Apikey) {
  return dispatch => {
    Axios.get(
      "https://www.omdbapi.com/?s=" +
        searchkey +
        "&page=" +
        PageNo +
        "&apikey=" +
        Apikey,
      { headers: { "Access-Control-Allowed-Origin": "*" } }
    )
      .then(response => {
        if (response.data["Response"] === "True") {
          dispatch(addMovieList(response.data["Search"]));
          dispatch(updatePageNo(PageNo));
          dispatch(movieResponseStatus("True"));
        } else {
          dispatch(movieResponseStatus("False"));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function fetchMovieDetails(searchkey, Apikey) {
  return dispatch => {
    Axios.get("https://www.omdbapi.com/?i=" + searchkey + "&apikey=" + Apikey, {
      headers: { "Access-Control-Allowed-Origin": "*" }
    })
      .then(response => {
        dispatch(selectedMovieDetails(response.data));
        dispatch(modalStatusUpdate(true));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
