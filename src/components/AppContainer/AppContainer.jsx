import React from "react";
import PropTypes from "prop-types";
import VideosList from "../VideosList";
import VideoDescription from "../VideoDescription";
import VideoPlayer from "../VideoPlayer";
import "./AppContainer.scss";

const AppContainer = (props) => {
  console.log("props:", props)
  return (
    <div>
      <VideoPlayer activeVideo={props.activeVideo} />
      <div className="activeContainer">
          <VideoDescription activeVideo={props.activeVideo} />
          <VideosList
            activeVideo={props.activeVideo}
            videos={props.videos}
            handleActiveVideo={props.handleActiveVideo}
          />
      </div>
    </div>
  );
};

AppContainer.propTypes = {
    activeVideo: PropTypes.object.isRequired,
    videos: PropTypes.array.isRequired,
    handleActiveVideo: PropTypes.func.isRequired
};

export default AppContainer;
