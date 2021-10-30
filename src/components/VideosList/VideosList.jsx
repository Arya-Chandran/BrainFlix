import React from 'react';
import Video from "../Video/Video";
import './VideosList.scss';

function VideosList(props) {
//   console.log("VideosList props", props);
  return (
    <ul className="videoList">
      <h4 className="videoList__heading">Next videos </h4>
      {props.videos.map((video) => {
        return (
          <li className="videoList__item" key={video.id}>
            <Video
              id={video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
              handleActiveVideo={props.handleActiveVideo}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default VideosList;
