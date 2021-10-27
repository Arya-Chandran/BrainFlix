import Video from "./Video";

function VideosList(props) {
//   console.log("VideosList props", props);
  return (
    <ul>
      {props.videos.map((video) => {
        return (
          <li key={video.id}>
            <Video
              image={video.image}
              title={video.title}
              channel={video.channel}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default VideosList;
