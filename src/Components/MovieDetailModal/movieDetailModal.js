import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { modalStatusUpdate } from "../../Actions/index";
import { connect } from "react-redux";
import "./movieDetailModal.css";

class ConnectedMovieDetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      poster: "",
      imdbRating: "",
      Director: "",
      Actors: "",
      selected_movie_detail: ""
    };
  }
  onOpenModal = () => {
    this.setState({ open: this.props.modalopen });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    this.props.modalStatusUpdate(false);
  };

  static getDerivedStateFromProps(props, state) {
    return {
      open: props.modalopen,
      selected_movie_detail: props.selected_movie_detail
    };
  }
  render() {
    const { open } = this.state;
    return (
      <Modal open={open} onClose={this.onCloseModal}>
        <div className="modal-container">
          <div className="modal-image-section">
            <img
              className="modal-poster-style"
              src={this.state.selected_movie_detail["Poster"]}
              onError={e => {
                e.target.onerror = null;
                e.target.src = "no_image_available.jpg";
              }}
              alt=""
            ></img>
          </div>
          <div className="modal-description-section">
            <h2>{this.state.selected_movie_detail["Title"]}</h2>
            <p aria-labelledby={this.state.selected_movie_detail["imdbRating"]}>
              <b>IMDB Rating: </b>
              {this.state.selected_movie_detail["imdbRating"]}
            </p>
            <p aria-labelledby={this.state.selected_movie_detail["Director"]}>
              <b>Director: </b>
              {this.state.selected_movie_detail["Director"]}
            </p>
            <p aria-labelledby={this.state.selected_movie_detail["Actors"]}>
              <b>Actors: </b>
              {this.state.selected_movie_detail["Actors"]}
            </p>
            <p aria-labelledby={this.state.selected_movie_detail["Released"]}>
              <b>Released On: </b>
              {this.state.selected_movie_detail["Released"]}
            </p>
            <p aria-labelledby={this.state.selected_movie_detail["Awards"]}>
              <b>Awards: </b>
              {this.state.selected_movie_detail["Awards"]}
            </p>
            <p aria-labelledby={this.state.selected_movie_detail["Plot"]}>
              <b>Plot : </b>
              {this.state.selected_movie_detail["Plot"]}{" "}
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalopen: state.store_modalopen,
    selected_movie_detail: state.store_selected_movie_details
  };
};

function mapDispatchToProps(dispatch) {
  return {
    modalStatusUpdate: openmodal => dispatch(modalStatusUpdate(openmodal))
  };
}

const MovieDetailModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMovieDetailModal);
export default MovieDetailModal;
