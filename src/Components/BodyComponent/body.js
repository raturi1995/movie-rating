import React, { Component } from "react";
import { connect } from "react-redux";
import "./body.css";
import {
  clearMovieList,
  updatePageNo,
  searchKeyinsertion
} from "../../Actions/index";
import { fetchMovieList, fetchMovieDetails } from "../../Actions/api-action";
import MovieDetailModal from "../MovieDetailModal/movieDetailModal";
import AsideAdvertisement from "../AsideComponent/asideAdvertisement";

class ConnectedBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movielist: [],
      apikey: "",
      totalresult: "",
      search_key: "",
      page_No: 1,
      selected_movie_details: "",
      open: false,
      movielist_response: ""
    };

    this.handleMovieSelected = this.handleMovieSelected.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovieList(
      this.state.search_key,
      this.state.page_No,
      this.state.apikey
    );
  }

  static getDerivedStateFromProps(props, state) {
    return {
      search_key: props.search_key,
      page_No: props.page_No,
      movielist: props.movielist,
      apikey: props.apikey,
      movielist_response: props.movielist_response
    };
  }

  handleEnterPress(e) {
    if (e.key === "Enter") {
      this.props.searchKeyinsertion(e.target.value.trim());
      this.props.clearMovieList("nill");
      this.props.updatePageNo(1);

      this.setState(
        { page_No: 1, search_key: e.target.value, movielist: [] },
        () => {
          this.props.fetchMovieList(
            this.state.search_key,
            this.state.page_No,
            this.state.apikey
          );
        }
      );
    }
  }

  handleSeeMore() {
    this.props.updatePageNo(this.state.page_No + 1);

    this.setState({ page_No: this.state.page_No + 1 }, () => {
      this.props.fetchMovieList(
        this.state.search_key,
        this.state.page_No,
        this.state.apikey
      );
    });
  }
  handleMovieSelected(selected_id) {
    this.props.fetchMovieDetails(selected_id, this.state.apikey);
  }
  render() {
    const handlerMovieSelected = (selected_id, event) => {
      if (event.type === "click" || event.key === "Enter") {
        this.handleMovieSelected(selected_id);
      }
    };
    let movie_detail_container = () => {
      if (this.state.movielist_response === "True") {
        return movie_details;
      } else if(this.state.movielist_response === "False"){
        return (

          <img
            className="no_result-found-style"
            src="No_result_found.png"
            alt=""
          />
        );
      } else{
        return (
          <img
            className="no_result-found-style"
            src="loading_image.png"
            alt=""
          />
        );
      }
    };
    let movie_details = this.state.movielist.map(item => {
      return (
        <dl
          className="list-item-wrapper"
          tabIndex="0"
          onClick={e => handlerMovieSelected(item["imdbID"], e)}
          onKeyDown={e => handlerMovieSelected(item["imdbID"], e)}
        >
          <dt>
            <img
              className="poster-image-style"
              src={item["Poster"]}
              onError={e => {
                e.target.onerror = null;
                e.target.src = "no_image_available.jpg";
              }}
              alt={item["Title"]}
            />
          </dt>
          <dd className="movie-title-style" aria-labelledby={item["Title"]}>
            {item["Title"]}
          </dd>
        </dl>
      );
    });

    return (
      <main>
        <section>
          <div className="search-bar-wrapper">
            <input
              placeholder="Try Me! Search Movies Here"
              className="search-bar-style"
              onKeyDown={this.handleEnterPress.bind(this)}
            ></input>
          </div>
          <div className="movie-list-container">{movie_detail_container()}</div>
          <button
            className="see-more-style"
            onClick={this.handleSeeMore.bind(this)}
          >
            See More
          </button>
        </section>
        <aside>
          <AsideAdvertisement />
          <AsideAdvertisement />
        </aside>
        <MovieDetailModal></MovieDetailModal>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    apikey: state.store_apikey,
    search_key: state.store_search_key,
    page_No: state.store_page_No,
    movielist: state.store_movielist,
    movielist_response: state.store_movielist_reponse
  };
};

function mapDispatchToProps(dispatch) {
  return {
    clearMovieList: clrMovieList => dispatch(clearMovieList(clrMovieList)),
    updatePageNo: pageNo => dispatch(updatePageNo(pageNo)),
    searchKeyinsertion: searchKey => dispatch(searchKeyinsertion(searchKey)),
    fetchMovieList: (searchkey, PageNo, Apikey) =>
      dispatch(fetchMovieList(searchkey, PageNo, Apikey)),
    fetchMovieDetails: (searchkey, Apikey) =>
      dispatch(fetchMovieDetails(searchkey, Apikey))
  };
}

const Body = connect(mapStateToProps, mapDispatchToProps)(ConnectedBody);
export default Body;
