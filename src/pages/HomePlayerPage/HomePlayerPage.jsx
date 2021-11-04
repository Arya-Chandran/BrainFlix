import React, { Component } from "react";
import videosData from "../../data/video-details.json";
import AppContainer from "../../components/AppContainer";
import axios from "axios";

class HomePlayerPage extends Component {

  state = {
    videos:[],
    activeVideo: null,
  };

  componentDidMount() {
    this.getVideos();
  }

  getVideos() {
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=c6576d2e-b5a7-4a7d-b3b4-435dac3e2e4d")
      .then((response) => {
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
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=c6576d2e-b5a7-4a7d-b3b4-435dac3e2e4d`
      )
      .then((response) => {
        const selectedVideo = response.data;
        console.log(selectedVideo);
        this.setState({
          activeVideo: selectedVideo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleActiveVideo = (id) => {
    console.log("handleActiveVideo", id);
    this.getVideoById(id);
  };

  render() {
    const { activeVideo, videos } = this.state;
    console.log("ActiveVideo:", activeVideo);
    console.log("ActiveVideo:", videos);
    return (
      <div>
        {activeVideo && videos && (
          <AppContainer
            activeVideo={this.state.activeVideo}
            videos={this.state.videos}
            handleActiveVideo={this.handleActiveVideo}
          />
        )}
      </div>
    );
  }
}

export default HomePlayerPage;
