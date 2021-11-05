import React from "react";
import PropTypes from "prop-types";
import "./VideoPlayer.scss";

const VideoPlayer = ({ activeVideo }) => {
  return (
    <div className="videoPlayer">
    <div className="videoWrapper">
      <video className="activeVideo" controls poster={activeVideo.image}>
        <source src={activeVideo.video + "?api_key=123"} type="video/mp4" />
      </video>
    </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default VideoPlayer;
