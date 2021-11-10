import React from "react";
import VideosList from "../VideosList";
import VideoDescription from "../VideoDescription";
import VideoPlayer from "../VideoPlayer";
import "./AppContainer.scss";

const AppContainer = (props) => {
  
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

export default AppContainer;
