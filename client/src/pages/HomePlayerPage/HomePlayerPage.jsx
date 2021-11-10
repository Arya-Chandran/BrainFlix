import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import axios from "axios";
import { Link } from "react-router-dom";

class HomePlayerPage extends Component {
  state = {
    videos: [],
    activeVideo: null,
  };

  componentDidMount() {
    this.getVideos();
  }

  getVideos() {
    axios
      .get(
        "http://localhost:8080/videos"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          videos: response.data,
        });
        this.getVideoById(response.data[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getVideoById(id) {
    axios
    .get(
      `http://localhost:8080/videos/${id}`
    )
    
      .then((response) => {
        const selectedVideo = response.data;
        this.setState({
          activeVideo: selectedVideo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id) {
      if (prevState.activeVideo && prevState.activeVideo.id !== id) {
        this.getVideoById(id);
      }
    }
  }

  render() {
    const { activeVideo, videos } = this.state;
    return (
      <div>
        {activeVideo && videos && (
          <Link to={"/videos/" + activeVideo.id}>
            <AppContainer
              activeVideo={this.state.activeVideo}
              videos={this.state.videos}
            />
          </Link>
        )}
      </div>
    );
  }
}

export default HomePlayerPage;
