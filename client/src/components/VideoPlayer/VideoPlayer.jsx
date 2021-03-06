import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ activeVideo }) => {
  return (
    <div className="videoWrapper">
      <video className="activeVideo" controls poster={"http://localhost:8080" + activeVideo.image}>
        <source src={activeVideo.video + "?api_key=123"} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
