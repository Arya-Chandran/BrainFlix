import React from 'react';
import Video from "../Video/Video";

function VideosList(props) {
//   console.log("VideosList props", props);
  return (
    <ul className="VideoList">
      {props.videos.map((video) => {
        return (
          <li key={video.id}>
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
