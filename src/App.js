import React from "react";
import "./App.css";
import videosData from "./data/video-details.json";
import AppContainer from "./components/AppContainer";

class App extends React.Component {
  state = {
    videos: videosData,
    activeVideo: videosData[0],
  };

  handleActiveVideo = (id) => {
    console.log("handleActiveVideo", id);
    const selectedVideo = this.state.videos.find((video) => {
      return video.id === id;
    });
    console.log(selectedVideo);
    this.setState({
      activeVideo: selectedVideo,
    });
  };

  render() {
    const { activeVideo } = this.state;
    console.log(activeVideo);
    return (
      <div className="App">
        <AppContainer
          activeVideo={this.state.activeVideo}
          videos={this.state.videos}
          handleActiveVideo={this.handleActiveVideo}
        />
      </div>
    );
  }
}

export default App;
